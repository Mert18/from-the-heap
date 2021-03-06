import axios from 'axios';
const url = 'https://localhost:3000/song';

export const fetchSongs = () => axios.get(url);
export const createSong = (newSong) => axios.post(url, newSong);