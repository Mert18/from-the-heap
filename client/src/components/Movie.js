import React from 'react';

const Movie = () => {
    return (
        <div className="movie">

            <div className="movie__left">
                <div className="movie__left__throw">
                    <form>
                        <input type="text" placeholder="Movie Title" />
                        <button>throw</button>
                    </form>
                </div>

                <div className="movie__left__statistics">
                    <h2>you have successfully thrown 14 movies to the heap!</h2>
                </div>
            </div>

            <div className="movie__right">
                <div className="movie__right__movies">
                    <div className="film">
                        <h1>title of the film</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Movie