const {pool} = require('../config/database');
const asyncHandler = require('express-async-handler');
const passport = require('passport')
const bcrypt = require("bcrypt");

const createUser = asyncHandler(async (req, res) => {
  let { username, email, password, password2 } = req.body;

  let errors = [];

  if (!username || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    res.status(500).send({ message: errors});
  } else {
    hashedPassword = await bcrypt.hash(password, 10);
    // Validation passed
    pool.query(
      `SELECT * FROM users
        WHERE email = $1`,
      [email],
      (err, results) => {
        if (err) {
          console.log(err);
        }

        if (results.rows.length > 0) {
          return res.status(500).send({ message: "Email already registered."});

        } else {
          pool.query(
            `INSERT INTO users (username, email, password)
                VALUES ($1, $2, $3)
                RETURNING id, password`,
            [username, email, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }
              res.status(200).send({ message: 'Account Created Successfully!' });
            }
          );
        }
      }
    );
  }
});
const authUser = () => {
  try {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
      }), function(req, res) {
      if (req.body.remember) {
        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
      } else {
        req.session.cookie.expires = false; // Cookie expires at end of session
      }
      res.redirect('/');
      }
  } catch (error) {
    console.log('User login failed.', error);
  }
  
}

module.exports = {
  createUser,
  authUser
}