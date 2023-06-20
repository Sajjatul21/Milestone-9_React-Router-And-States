import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    return (
        <div>
            <h2>This is Orders: {products.length}</h2>
            <p>Inatial cart: {cart.length}</p>
        </div>
    );
};

export default Orders;