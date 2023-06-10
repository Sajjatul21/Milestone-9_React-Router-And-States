import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/products'>Products</Link>
                <Link to='/posts'>Posts</Link>
            </nav>
            <p>common Header</p>
            {/* 52-4 Load Users, display users, dynamic link, Not Found */}
        </div>
    );
};

export default Header;