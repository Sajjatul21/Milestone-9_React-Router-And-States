import { getShoppingCart } from '../../utilities/fakedb';

export const productsAndCartLoader = async () => {
    // get Products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // console.log("products:-", products);

    // get Cart
    const saveCart = getShoppingCart();
    const initialCart = [];
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);

        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            initialCart.push = addedProduct;
        }
    }
    return { products: products, initialCart: initialCart };


};