import React from 'react';

const ReviewItem = ({ product }) => {
    console.log(product);
    const { name, price, quentity } = product;
    return (
        <div>
            <h2>This is Review Item</h2>
        </div>
    );
};

export default ReviewItem;