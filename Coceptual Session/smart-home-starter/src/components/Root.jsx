import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const Root = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);


    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <div>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Root;