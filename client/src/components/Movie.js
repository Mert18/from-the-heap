import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Movies from './Movies/Movies.js';

import { createMovie } from '../actions/Movies';

const Movie = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const MovieTitleUpdate = (e) => {
        setTitle(e.target.value);
    }
    const MovieMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    const MovieObject = {
        title: title,
        message: message
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMovie(MovieObject));
    }
    return (
        <div className="movie">

            <div className="movie__left">
                <div className="movie__left__throw">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label htmlFor="movie__title">Title</label>
                        <input type="text" id="movie__title" required onChange={MovieTitleUpdate} />

                        <label htmlFor="movie__message">Your Message</label>
                        <input type="text" id="movie__message" onChange={MovieMessageUpdate} />
                        <button type="submit"></button>
                    </form>
                </div>

                <div className="movie__left__statistics">
                    <h2>you have successfully thrown 14 movies to the heap!</h2>
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