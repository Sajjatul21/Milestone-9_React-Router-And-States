import React from 'react';
import './TShirt.css';
const TShart = ({ tshart, handleAddToCart }) => {
    const { picture, name, price } = tshart;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tshart)}>Buy This</button>
        </div>
    );
};

export default TShart;