import React, { useState } from 'react';

import Posts from './Posts/Posts.js';

const Song = () => {

    const [slow, setSlow] = useState(false);
    const [medium, setMedium] = useState(false);
    const [fast, setFast] = useState(false);

    return (
        <div className="song">
            <div className="song__left">
                <div className="song__left__header">
                    <div className="song__left__header__buttons">
                        <button onClick={() => setSlow(!slow)}>Slow</button>
                        <button onClick={() => setMedium(!medium)}>Medium</button>
                        <button onClick={() => setFast(!fast)}>Fast</button>
                    </div>
                </div>

                <div className="song__left__content">
                    <Posts />
                </div>
            </div>

            <div className="song__right">
                <div className="song__right__statistics">
                    <h1>you have thrown 34 songs to the heap!</h1>
                </div>
                <div className="song__right__throw">
                    <h2>throw something to the heap</h2>
                    <form>
                        <input type="text" placeholder="Song" />
                        <input type="text" placeholder="Artist" />
                        <button>throw</button>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Song