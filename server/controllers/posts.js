
const Song = require('../models/song.js');


exports.createsong = (req, res) => {
    const {artist, title, thoughts} = req.body;

    const song = new Song({artist, title, thoughts})
}