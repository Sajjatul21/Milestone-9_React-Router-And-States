import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    // console.log(countries);
    return (
        <div>
            <h1>All Countries {countries.length}</h1>
            {
                countries.map(country => <li key={country.cca3}>
                    <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                </li>)
            }
        </div>
    );
};

export default Countries;