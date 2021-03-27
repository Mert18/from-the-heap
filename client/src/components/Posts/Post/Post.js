import React from 'react';

const Post = ({ post }) => {

    return (
        <div className="post">
            <div className="post__title">
                <h1>{post.title}</h1>
            </div>

            <div className="post__artist">
                <h3>{post.message}</h3>
            </div>

            <div className="post__links">
                <a href={post.spotify} target="_blank" rel="noreferrer">Spotify</a>
                <a href={post.youtube} target="_blank" rel="noreferrer">Youtube</a>
            </div>
        </div>
    )
}

export default Post