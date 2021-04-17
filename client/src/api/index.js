import axios from 'axios';

const url = "https://from-the-heap.herokuapp.com";
export const fetchPosts = () => axios.get(`${url}/api/posts`);
export const createPost = (newPost) => axios.post(`${url}/api/posts`, newPost);

export const fetchMovies = () => axios.get(`${url}/api/movies`)
export const createMovie = (newMovie) => axios.post(`${url}/api/movies`, newMovie)