import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
    const RingContext = createContext('Matir Ring')
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
/* আমাদের grandpa->father->myself->special এ props drilling করে ডাটা পাঠানো অনেক inconvennient তাই আমরা context api use  করবে। https://react.dev/learn/passing-data-deeply-with-context  */

export default Grandpa;