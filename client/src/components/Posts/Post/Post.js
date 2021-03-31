import React from 'react';
import spotify from '../../../assets/spotify.svg'
import youtube from '../../../assets/youtube.svg'

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
                <a href={post.spotify} target="_blank" rel="noreferrer"><img src={spotify} alt="spotify icon" width="100px" /></a>
                <a href={post.youtube} target="_blank" rel="noreferrer"><img src={youtube} alt="youtube icon" width="100px" /></a>
            </div>
        </div>
    )
}

export default Post