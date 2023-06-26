import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
const RingContext = createContext('Matir Ring');
const Grandpa = () => {
    const house = 7;
    const ring = 'Diamond Ring';
    return (
        <div className='grandpa'>
            <h4>Grandpa</h4>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};
/* 54-7 Simple Introduction to Context API to avoid Prop drilling */

export default Grandpa;