import React, { useState } from 'react';
import Posts from './Posts/Posts.js';

const Song = () => {

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


    const handleSubmit = () => {

        const postURL = "https://from-the-heap.herokuapp.com/posts";

        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                message: message,
                spotify: spotify,
                youtube: youtube
            })
        })
            .then(() => {
                alert('Successfully added.')
            })

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