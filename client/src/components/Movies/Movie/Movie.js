import React from 'react';

const Movie = ({ movie }) => {

    return (
        <div className="singlemovie">
            <div className="singlemovie__title">
                <h1>{movie.title}</h1>
            </div>

            <div className="singlemovie__message">
                <h3>{movie.message}</h3>
            </div>
        </div>
    )
}

export default Movie