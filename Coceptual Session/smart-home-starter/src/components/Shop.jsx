import React, { useContext, useState } from 'react';
import { CartContext, ProductContext } from './Root';
import Product from './Product';
import { addToDb } from '../utils/fakeDB';
import { toast } from 'react-toastify';

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find(existingProducts => existingProducts.id === product.id);
    // console.log(exist);

    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    else {
      const rest = cart.filter(existingProducts => existingProducts.id !== product.id);
      exist.quantity = exist.quantity + 1;

      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(product.id);
    toast.success('Product Added!', { autoClose: 500 });
  };


  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
    </div>
  );
};

export default Shop;
