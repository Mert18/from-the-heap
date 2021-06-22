
const express = require('express');

const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const authRoutes = require('./routes/auth');

app.use(morgan('dev'));

if((process.env.NODE_ENV = 'development')) {
    app.use(cors({origin: 'http://localhost:3000'}))
}

app.use('/api', authRoutes);


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log('DB Connected.'))
.catch(err => console.log('ERR CONN ERROR', err.message))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`API is running on ${PORT}`)
})