const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routes/index');
const songRoute = require('./routes/songRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/json' }));
app.use(cors());

app.use(index);
app.use('/api', songRoute);

module.exports = app;