
const express = require('express');

const {userSignupValidator, userSigninValidator} = require('../validators/auth');
const {runValidation} = require('../validators');

const {signup, accountActivation, signin} = require('../controllers/auth.js');

const router = express.Router();



router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);



module.exports = router;