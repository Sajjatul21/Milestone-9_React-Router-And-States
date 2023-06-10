import React from 'react';
import Cart from '../Cart/Cart';

const CartGroup = () => {
    const products = [
        { id: 1, name: 'Mac Book Air m2', price: 200000 },
        { id: 2, name: 'Mac Book pro', price: 150000 },
        { id: 3, name: 'Mac Book pro max', price: 155000 },
    ];
    return (
        <div className="card-group">

            {
                products.map(product => <Cart key={product.id} product={product}></Cart>)
            }
        </div>
    );
};

export default CartGroup;