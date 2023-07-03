import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const Root = () => {
    const { products, inatialCart } = useLoaderData();
    const [cart, setCart] = useState(inatialCart);


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