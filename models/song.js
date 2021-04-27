const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
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
    comment: {
        type: String,
        trim: true,
    },
    spotifylink: {
        type: String,
        trim:true
    }
}, {timestamps: true})

module.exports = mongoose.model('Song', songSchema);