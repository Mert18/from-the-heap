import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    return (
        <div className="post">
            <div className="post__title">
                <h1>{post.title}</h1>
            </div>

            <div className="post__artist">
                <h3>{post.message}</h3>
            </div>

            <div>
                <Link to={post.spotify} target="_blank" rel="noreferrer">Spotify</Link>
                <Link to={post.youtube} target="_blank" rel="noreferrer">Youtube</Link>
            </div>
        </div>
    )
}

export default Post