import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    return (
        <div>
            <h1>Details about Post: {id}</h1>
            <p>{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;