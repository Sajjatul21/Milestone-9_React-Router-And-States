import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ house }) => {
    return (
        <div>
            <h4>Cousin</h4>
            {
                <p><small>House: {house}</small></p>
            }
            <Friend></Friend>
        </div>
    );
};

export default Cousin;