import React from 'react';


const Song = ({ song }) => {

    return (
        <div className="song">
            <div className="song__title">
                <h1>{song.title}</h1>
            </div>

            <div className="song__artist">
                <h3>{song.artist}</h3>
            </div>
        </div>
    )
}

export default Song