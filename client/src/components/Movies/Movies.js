import React from 'react';
import { useSelector } from 'react-redux';

import Movie from './Movie/Movie.js';

const Movies = () => {
    /* 
        useEffect(() => {
            dispatch(getPosts())
            // Safe to add dispatch to the dependencies array
        }, [dispatch]) */
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