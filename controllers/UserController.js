import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const Users = await User.find({});
        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        if (newUser) {
            await newUser.save();
        }
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}