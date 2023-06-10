import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>User Name: <Link to={`/friend/${id}`}>{username}</Link></small></p>
            {/* 52-5 React route parameter and load data based on dynamic route */}
        </div>
    );
};

export default Friend;