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
            
            {/*আমরা এখন  link make করে পেলছি  এবার  আমাদের route defination লাগবে আার link এর click করলে সে কোথায় যাবে সেটা লাগবে */}

        </div>
    );
};

export default Friend;