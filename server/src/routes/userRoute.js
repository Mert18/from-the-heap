const express = require('express');
const {createUser, authUser} = require('../controllers/userController.js');

const router = express.Router();


// (POST):/api/users/register
router.post('/users/register', createUser);

// (POST):/api/users/login
router.post('/users/login', authUser );


module.exports = router;