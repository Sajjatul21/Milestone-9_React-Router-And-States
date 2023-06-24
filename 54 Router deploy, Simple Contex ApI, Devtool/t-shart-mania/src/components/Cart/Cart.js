import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Orders Summary</h2>
            <h5>Orders Quentity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                </p>)
            }
        </div>
    );
};

export default Cart;