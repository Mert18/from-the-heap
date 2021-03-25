import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './Posts/Posts.js';

import { createPost } from '../actions/Posts';

const Song = () => {
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({ title: "", message: "", spotify: "", youtube: "" })

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
                <div className="song__right__throw">
                    <form autoComplete="off">
                        <label htmlFor="song__title">Title</label>
                        <input type="text" id="song__title" required onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

                        <label htmlFor="song__message">Your Message</label>
                        <input type="text" id="song__message" name="message" required onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

                        <label htmlFor="song__spotify">Spotify Link</label>
                        <input type="text" id="song__spotify" name="spotify" required onChange={(e) => setPostData({ ...postData, spotify: e.target.value })} />

                        <label htmlFor="song__youtube">Youtube Link</label>
                        <input type="text" id="song__youtube" name="youtube" required onChange={(e) => setPostData({ ...postData, youtube: e.target.value })} />

                        <button onClick={handleSubmit}></button>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Song