import SongMessage from '../models/SongMessage.js';

export const getSongs = async (req, res) => {

    try {
        const SongMessages = await SongMessage.find();
        console.log(SongMessage);
        res.status(200).json(SongMessages);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createSong = async (req, res) => {
    const Song = req.body;
    const newSong = new SongMessage(Song);

    try {
        await newSong.save();
        res.status(201).json(newSong);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}