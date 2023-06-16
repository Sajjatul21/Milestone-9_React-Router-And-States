import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData();
    console.log(country);
    return (
        <div>

        </div>
    );
};

export default Country;