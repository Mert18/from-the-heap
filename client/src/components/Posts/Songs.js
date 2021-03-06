import React from 'react';
import { useSelector } from 'react-redux';

import Song from './Song';

const Songs = () => {

    const songs = useSelector((state) => state.songs);

    console.log(songs);
    return (
        <div className="songs">
            {songs.map((song) => (
                <Song song={song} key={song._id} />
            ))}
        </div>
    )
}