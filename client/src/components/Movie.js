import React, { useState } from 'react';

import Movies from './Movies/Movies.js';

const Movie = () => {

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const MovieTitleUpdate = (e) => {
        setTitle(e.target.value);
    }
    const MovieMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = () => {

        const postURL = "https://from-the-heap.herokuapp.com/movies";

        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                message: message,
            })
        })
            .then(() => {
                alert('Successfully added.')
            })

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