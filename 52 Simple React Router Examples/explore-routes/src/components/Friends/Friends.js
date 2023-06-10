import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h4>I have so many friends.YAY!!!!!: {friends.length}</h4>
        </div>
    );
};

export default Friends;