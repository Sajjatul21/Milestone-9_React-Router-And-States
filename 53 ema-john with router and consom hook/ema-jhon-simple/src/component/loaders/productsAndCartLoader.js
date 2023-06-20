import { getShoppingCart } from '../../utilities/fakedb';
export const productsAndCartLoader = async () => {
    // get Products
    const productData = await fetch('products.json');
    const products = await productData.json();

    console.log("products:-", products);

    // get Cart
    const saveCart = getShoppingCart();
    for (const id in saveCart) {
        console.log(id);
    }
    return products;
};