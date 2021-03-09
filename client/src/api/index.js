import axios from 'axios';
const url = 'https://from-the-heap.herokuapp.com';

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);

export const fetchMovies = () => axios.get(`${url}/movies`)
export const createMovie = (newMovie) => axios.post(`${url}/movies`, newMovie)