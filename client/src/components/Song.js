import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './Posts/Posts.js';

import { createPost } from '../actions/Posts';

const Song = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [spotify, setSpotify] = useState("");
    const [youtube, setYoutube] = useState("");

    const SongTitleUpdate = (e) => {
        setTitle(e.target.value);
    }
    const SongMessageUpdate = (e) => {
        setMessage(e.target.value);
    }
    const SongSpotifyUpdate = (e) => {
        setSpotify(e.target.value);
    }
    const SongYoutubeUpdate = (e) => {
        setYoutube(e.target.value);
    }

    const songObject = {
        title: title,
        message: message,
        spotify: spotify,
        youtube: youtube
    }
    const handleSubmit = () => {

        dispatch(createPost(songObject));
    }

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
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <label htmlFor="song__title">Title</label>
                        <input type="text" id="song__title" required onChange={SongTitleUpdate} />

                        <label htmlFor="song__message">Your Message</label>
                        <input type="text" id="song__message" required onChange={SongMessageUpdate} />

                        <label htmlFor="song__spotify">Spotify Link</label>
                        <input type="text" id="song__spotify" required onChange={SongSpotifyUpdate} />

                        <label htmlFor="song__youtube">Youtube Link</label>
                        <input type="text" id="song__youtube" required onChange={SongYoutubeUpdate} />

                        <button></button>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Song