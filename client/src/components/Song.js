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
                        <input type="text" placeholder="Throw the song here" />
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Song