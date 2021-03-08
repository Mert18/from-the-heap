import React from 'react';

import Posts from './Posts/Posts.js';

const Song = () => {
    return (
        <div className="song">
            <div className="song__left">
                <div className="song__left__content">
                    <Posts />
                </div>
            </div>

            <div className="song__right">
                <div className="song__right__statistics">
                    <h1>YOU HAVE THROWN 34 SONGS TO THE HEAP!</h1>
                </div>
                <div className="song__right__throw">
                    <form>
                        <label for="song__title">Title</label>
                        <input type="text" id="song__title" />

                        <label for="song__message">Your Message</label>
                        <input type="text" id="song__message" />

                        <label for="song__spotify">Spotify Link</label>
                        <input type="text" id="song__spotify" />

                        <label for="song__youtube">Youtube Link</label>
                        <input type="text" id="song__youtube" />

                        <button></button>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Song