import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ house }) => {
    return (
        <div>
            <h3>Father</h3>
            <p><small>House:{house}</small></p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Sister house={house}></Sister>
                <Brother house={house}></Brother>
            </section>
        </div>
    );
};

export default Father;