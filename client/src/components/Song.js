import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Posts from './Posts/Posts.js';

import { createPost } from '../actions/Posts';

const Song = () => {

    const [postData, setPostData] = useState({ title: '', message: '', spotify: '', youtube: '' });
    const post = useSelector((state) => state.posts.find());
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
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
                        <input value={postData.title} type="text" id="song__title" name="title" required />

                        <label htmlFor="song__message">Your Message</label>
                        <input value={postData.message} type="text" id="song__message" name="message" required />

                        <label htmlFor="song__spotify">Spotify Link</label>
                        <input value={postData.spotify} type="text" id="song__spotify" name="spotify" required />

                        <label htmlFor="song__youtube">Youtube Link</label>
                        <input value={postData.youtube} type="text" id="song__youtube" name="youtube" required />

                        <button></button>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Song