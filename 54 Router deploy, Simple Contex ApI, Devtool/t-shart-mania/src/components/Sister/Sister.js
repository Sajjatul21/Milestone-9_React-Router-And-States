import React, { useContext } from 'react';
import { MonuContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const mony = useContext(MonuContext);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House: {house}</small></p>
            <p><small>Mony: {mony}</small></p>

        </div>
    );
};

export default Sister;