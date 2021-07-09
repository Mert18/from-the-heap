const db = require('../config/database');
const asyncHandler = require('express-async-handler');

//@desc Fetch all songs
//@route GET /api/songs
//@access Public
const listAllSongs = asyncHandler(async(req, res) => {
  const response = await db.query('SELECT * FROM songs ORDER BY title ASC');
  res.status(200).send(response.rows);
})

//@desc Create a songs
//@route POST /api/songs
//@access Public
const createSong = asyncHandler(async(req, res) => {
  const { title, artist, thoughts } = req.body;
  const response = await db.query('INSERT INTO songs (title, artist, thoughts) VALUES ($1, $2, $3)', [title, artist, thoughts]);
  res.status(201).send({
    message: 'Song added successfully!',
    body: {
      song: { title, artist, thoughts },
    },
  });
})

//@desc Find Song By Id
//@route GET /api/songs/:id
//@access Public
const findSongById = asyncHandler(async (req, res) => {
  const songId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM songs WHERE songId = $1', [songId]);
  res.status(200).send(response.rows);
});

//@desc Update Song By Id
//@route PUT /api/songs/:id
//@access Private
const updateSongById = asyncHandler(async (req, res) => {
  const songId = parseInt(req.params.id);
  const { title, artist, thoughts } = req.body;
  const response = await db.query('UPDATE songs SET title = $1, artist = $2, thoughts = $3 WHERE id = $4', [title, artist, thoughts, songId]);

  res.status(200).send({ message: 'Song Updated Successfully!' });
})

//@desc Update Song By Id
//@route PUT /api/songs/:id
//@access Private
const deleteSongById = asyncHandler(async (req, res) => {
  const songId = parseInt(req.params.id);
  await db.query('DELETE FROM songs WHERE id = $1', [songId]);

  res.status(200).send({ message: 'Song deleted successfully!', songId });
});

module.exports = {
  listAllSongs,
  createSong,
  findSongById,
  updateSongById,
  deleteSongById
}