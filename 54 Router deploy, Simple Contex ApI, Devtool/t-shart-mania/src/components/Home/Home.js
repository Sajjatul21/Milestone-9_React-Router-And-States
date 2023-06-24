import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShart from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tsharts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tsharts => {
        const exeist = cart.find(ts => ts._id === tsharts._id);
        if (exeist) {
            alert('T-shirt already added');
        }
        else {
            const newCart = [...cart, tsharts];
            setCart(newCart);
            alert("Sucessfully Added");
        }
    };
    return (
        <div className='home-container'>
            <div className="t-shart-container">
                {
                    tsharts.map(tshart => <TShart
                        key={tshart._id}
                        tshart={tshart}
                        handleAddToCart={handleAddToCart}
                    ></TShart>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;