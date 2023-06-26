import React, { useContext } from 'react';
import { MonuContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [mony, setMony] = useContext(MonuContext);
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>House: {house}</small></p>
            <p><small>Mony: {mony}</small></p>
        </div>
    );
};

export default Uncle;