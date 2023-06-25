import React from 'react';

const Cart = ({ cart, handleRemoveIems }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item !!!</p>;
    }
    else if (cart.length === 1) {
        message = <div>
            <h2>Amar jonno ekta now</h2>
            <p>Tomar nijer jonno ekta nao</p>
            <p><small>Tonur jonno ekta now, Please</small></p>
        </div>;
    }
    else {
        message = <p>Thanks for Buying!</p>;
    }
    return (
        <div>
            <h2>Orders Summary</h2>
            <h5>Orders Quentity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveIems(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;
/* 
Conditional Rendering 
    1. use element in a variable and then use  if-else to set value
*/