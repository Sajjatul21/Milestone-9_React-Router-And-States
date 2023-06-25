import React from 'react';
import './Cart.css';
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
            <h2 className={cart.length === 2 ? `orange` : 'purple'}>Orders Summary</h2>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
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
            {cart.length === 3 ? <p>Tin jon ke gift korba?</p> : <p>kino kino beshi kore kino</p>}
            <p>And OPerator</p>
            {cart.length === 2 && <h2>Double items</h2>}
            <p>4.OR Operator</p>
            {cart.length === 4 || <h4>Carta item na</h4>}
        </div>
    );
};

export default Cart;
/* 
Conditional Rendering 
    1. use element in a variable and then use  if-else to set value
    2. ternary operator-> conditon ? true: fals
    3. && operator (if conditiorn is true, i want ot display something)
    h. || operator (if conditon is false, i want ot display something)
*/