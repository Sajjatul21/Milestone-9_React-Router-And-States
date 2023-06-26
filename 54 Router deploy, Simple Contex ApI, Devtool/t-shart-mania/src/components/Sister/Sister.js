import React, { useContext } from 'react';
import { MonuContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [mony, setMony] = useContext(MonuContext);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House: {house}</small></p>
            <p><small>Mony: {mony}</small></p>
            <button onClick={() => setMony(mony + 1000)}>Add 1000</button>
        </div>
    );
};

export default Sister;