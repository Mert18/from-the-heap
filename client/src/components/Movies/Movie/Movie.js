import React from 'react';

const Movie = ({ movie }) => {

    return (
        <div className="movie">
            <div className="movie__title">
                <h1>{movie.title}</h1>
            </div>

            <div className="movie__message">
                <h3>{movie.message}</h3>
            </div>
        </div>
    )
}

export default Movie