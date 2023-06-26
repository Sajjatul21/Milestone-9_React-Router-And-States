import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
export const RingContext = createContext('Matir Ring');
export const MonuContext = createContext(555);
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [mony, setMony] = useState(555);
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MonuContext.Provider value={[mony, setMony]}>
                <div className='grandpa'>
                    <h4>Grandpa</h4>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MonuContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;

/* আমরা  netlify এর সাইট deploy করার পর  grandpa কে যখন রিলোড করি তখন  no page found আসে  */
/*  google seacth: natlify react router 404  */

