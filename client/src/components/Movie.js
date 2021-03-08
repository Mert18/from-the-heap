import React from 'react';

const Movie = () => {
    return (
        <div className="movie">

            <div className="movie__left">
                <div className="movie__left__throw">
                    <form>
                        <label for="movie__title">Title</label>
                        <input type="text" id="movie__title" />

                        <label for="movie__message">Your Message</label>
                        <input type="text" id="movie__message" />
                        <button></button>
                    </form>
                </div>

                <div className="movie__left__statistics">
                    <h2>you have successfully thrown 14 movies to the heap!</h2>
                </div>
            </div>

            <div className="movie__right">
                <div className="movie__right__movies">
                    <div className="film">
                        {/* MOVIES COME HERE */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Movie