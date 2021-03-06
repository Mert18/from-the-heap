const express = require('express');
const cors = require('cors');
const passport = require('passport');
const app = express();
const flash = require("express-flash");
const session = require("express-session");
const index = require('./routes/index');

const songRoute = require('./routes/songRoute');
const userRoute = require('./routes/userRoute')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/json' }));
app.use(cors());
app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);
// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());
app.use(index);
app.use('/', songRoute, userRoute);

module.exports = app;