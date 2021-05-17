
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
// sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.signup = (req, res) => {

    const {name, email, password} = req.body;

    User.findOne({email}).exec((err, user) => {
        if(user) {
            return res.status(400).json({
                error: 'Email is taken.'
            })
        }
        const token = jwt.sign({name, email, password}, process.env.JWT_ACCOUNT_ACTIVATION, {expiresIn: '15m'});

        const emailData = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'FROM THE HEAP ACCOUNT ACTIVATION',
            html: `
                <p>Hello ${name}!</p>
                <p>You can use the following link for activating your account:</p>
                <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                <hr />
                <p>${process.env.CLIENT_URL}</p>
            `
        }

        sgMail.send(emailData)
        .then(sent => {

            return res.json({
                message: `Email has been sent to ${email}. Please follow the instructions in the email.`
            })
        })
        .catch(err => {
            return res.json({
                message: err
            })
        })
    });

}

exports.accountActivation = (req, res) => {
    const {token} = req.body;

    if(token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded) {
            if(err){
                return res.status(401).json({
                    error: 'Expired link. Please sign up again.'
                })
            }

            const {name, email, password} = jwt.decode(token);
            const user = new User({name, email, password});

            user.save((err, user) => {
                if(err){
                    return res.status(401).json({
                        error: 'Error saving user in database.'
                    })
                }
                return res.json({
                    message: 'Sign up success. Please sign in.'
                })
            })
        });
    } else {
        return res.json({
            message: 'Something went wrong.'
        })
    }
}

exports.signin = (req, res) => {

    const {email, password} = req.body;

    User.findOne({email}).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: 'Email does not exists. Please sign up.'
            })
        }

        if(!user.authenticate(password)){
            return res.status(400).json({
                error: 'Email and password do not match'
            })
        }
        
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn:'3d'});
        const {_id, name, email, role} = user;

        return res.json({
            token,
            user: {_id, name, email, role}
        })
    });

}