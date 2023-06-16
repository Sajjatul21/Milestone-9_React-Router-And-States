import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0];
    // console.log(country);
    return (
        <div>
            <img src={country.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Region: {country.region}</p>

        </div>
    );
};

export default Country;