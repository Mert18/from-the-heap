import express from 'express';

import { getMovies, createMovie } from '../controllers/Movies.js';

const router = express.Router();

router.get('/movies', getMovies);
router.post('/movies', createMovie);

export default router;