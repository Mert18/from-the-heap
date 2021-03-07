import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js';

const Posts = () => {

    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return (
        <div className="posts">
            {posts.map((post) => (
                <Post song={post} key={post._id} />
            ))}
        </div>
    )
}

export default Posts