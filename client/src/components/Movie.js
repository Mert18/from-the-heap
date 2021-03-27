import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Movies from './Movies/Movies.js';

import { createMovie } from '../actions/Movies';

const Movie = () => {

    const dispatch = useDispatch();

    const [movieData, setMovieData] = useState({ title: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMovie(movieData));
        setMovieData({ title: "", message: "" })
    }
    return (
        <div className="movie">

            <div className="movie__left">
                <div className="movie__left__throw">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label htmlFor="movie__title">Title</label>
                        <input type="text" id="movie__title" required onChange={(e) => setMovieData({ ...movieData, title: e.target.value })} />

                        <label htmlFor="movie__message">Your Message</label>
                        <input type="text" id="movie__message" onChange={(e) => setMovieData({ ...movieData, message: e.target.value })} />
                        <button type="submit"></button>
                    </form>
                </div>
            </div>

            <div className="movie__right">
                <div className="movie__right__movies">
                    <div className="film">
                        <Movies />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Movie