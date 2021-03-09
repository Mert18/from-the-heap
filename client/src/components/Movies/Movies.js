import React from 'react';
import { useSelector } from 'react-redux';

import Movie from './Movie/Movie.js';

const Movies = () => {

    const movies = useSelector((state) => state.movies);
    return (
        <div className="movies">
            {movies.map((movie) => (
                <Movie movie={movie} key={movie._id} />
            ))}
        </div>
    )
}

export default Movies