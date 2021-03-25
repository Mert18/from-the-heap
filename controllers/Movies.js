import MovieMessage from '../models/MovieMessage.js';

export const getMovies = async (req, res) => {
    try {
        const MovieMessages = await MovieMessage.find({});
        console.log(MovieMessage);
        res.status(200).json(MovieMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createMovie = async (req, res) => {
    const movie = req.body;
    const newMovie = new MovieMessage(movie);

    try {
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}