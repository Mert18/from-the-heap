import User from '../models/User.js';

import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

// @desc Auth user & get token
// @router POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401);
        throw new Error('Email or password not valid.')
    }
})

// @desc Get user profile
// @route POST /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        throw new Error('User not found')
    }
})

// @desc Register new user
// @router POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists.');
    }
    const user = await User.create({
        username,
        email,
        password
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data.');
    }
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);

    if (user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404);
        throw new Error('User not found')
    }
})

const getUsers = async (req, res) => {
    try {
        const Users = await User.find({});
        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}


export {
    authUser,
    getUsers,
    registerUser,
    updateUserProfile,
    getUserProfile
}