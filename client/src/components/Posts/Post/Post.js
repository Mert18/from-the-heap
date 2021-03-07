import React from 'react';


const Post = ({ post }) => {

    return (
        <div className="post">
            <div className="post__title">
                <h1>{post.title}</h1>
            </div>

            <div className="post__artist">
                <h3>{post.artist}</h3>
            </div>
        </div>
    )
}

export default Post