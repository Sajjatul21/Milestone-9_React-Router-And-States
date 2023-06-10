import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h4>A loat of fb post here</h4>
        </div>
    );
};

export default Posts;