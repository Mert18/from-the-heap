const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(
    {
        artist: {
            type: String,
            trim: true,
            required: true
        },
        title: {
            type: String,
            trim: true,
            required: true
        },
        thoughts: {
            type: String,
            trim: true
        }
    }, {timestampes: true}
);

module.exports = mongoose.model('Song', songSchema);