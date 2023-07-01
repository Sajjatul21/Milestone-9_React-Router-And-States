import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProductContext = createContext([]);

const Root = () => {
    return (
        <ProductContext.Provider value={[]}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ProductContext.Provider>
    );
};

export default Root;