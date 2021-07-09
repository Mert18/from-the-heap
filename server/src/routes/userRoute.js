const express = require('express');
const {createUser} = require('../controllers/userController.js');

const router = express.Router();


// (POST):/api/users
router.post("/users/register", createUser);

module.exports = router;