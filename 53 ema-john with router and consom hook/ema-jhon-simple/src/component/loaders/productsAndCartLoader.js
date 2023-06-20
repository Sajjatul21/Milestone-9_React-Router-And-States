import { getShoppingCart } from '../../utilities/fakedb';
export const productsAndCartLoader = async () => {
    // get Products
    const productData = await fetch('products.json');
    const products = await productData.json();


    // get Cart
    const saveCart = getShoppingCart();
    console.log(saveCart);
    return products;
};