import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product }) => {

    const { name, price, quentity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                </div>
                <div className="delete-container">
                    <button>delete</button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;