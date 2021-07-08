const express = require('express');
const {createSong, listAllSongs, findSongById, updateSongById, deleteSongById} = require('../controllers/songController');

const router = express.Router();

// (POST):/api/songs
router.post('/songs', createSong);

// (GET):/api/Songs
router.get('/songs', listAllSongs);

// (GET):/api/Songs/:id
router.get('/songs/:id', findSongById);

// (PUT):/api/Songs/:id
router.put('/songs/:id', updateSongById);

// (DELETE):/api/Songs/:id
router.delete('/songs/:id', deleteSongById);

module.exports = router;