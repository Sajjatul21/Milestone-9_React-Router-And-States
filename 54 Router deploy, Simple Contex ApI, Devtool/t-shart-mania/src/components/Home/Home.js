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
            // alert("Sucessfully Added");
        }
    };

    const handleRemoveIems = tshirt => {
        // console.log(tshirt);
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);

        // 54-4 Explore Conditional Rendering & conditional css class
        
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
                <Cart cart={cart} handleRemoveIems={handleRemoveIems}></Cart>
            </div>
        </div>
    );
};

export default Home;