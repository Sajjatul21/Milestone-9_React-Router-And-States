import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShart from '../TShart/TShart';

const Home = () => {
    const tsharts = useLoaderData();
    return (
        <div>
            {
                tsharts.map(tshart => <TShart
                    key={tshart._id}
                    tshart={tshart}
                ></TShart>)
            }
        </div>
    );
};

export default Home;