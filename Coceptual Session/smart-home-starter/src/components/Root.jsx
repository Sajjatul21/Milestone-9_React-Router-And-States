import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const ProductContext = createContext([]);

const Root = () => {

    const products = useLoaderData();


    return (
        <ProductContext.Provider value={products}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ProductContext.Provider>
    );
};

export default Root;