import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id } = post;
    return (
        <div>
            <h1>Details about Post: {id}</h1>
        </div>
    );
};

export default PostDetails;