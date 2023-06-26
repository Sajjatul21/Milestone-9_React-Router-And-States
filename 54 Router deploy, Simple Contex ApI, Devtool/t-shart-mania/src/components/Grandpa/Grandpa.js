import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
export const RingContext = createContext('Matir Ring');
const Grandpa = () => {
    const house = 7;
    return (
        <RingContext.Provider value='Dadir Diamond Ring'>
            <div className='grandpa'>
                <h4>Grandpa</h4>
                <section className='flex'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;