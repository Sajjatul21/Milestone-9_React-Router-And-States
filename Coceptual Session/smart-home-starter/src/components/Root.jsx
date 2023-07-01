import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProductContext = createContext([]);

const Root = () => {

    const products = useLoaderData();
    console.log(products);

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