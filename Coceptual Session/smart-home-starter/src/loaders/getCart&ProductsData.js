import { getStoredCart } from "../utils/fakeDB";

export const getCartAndProductsData = async () => {
    const ProductsData = await fetch('products.json');
    const products = await ProductsData.json();

    const saveCart = getStoredCart();

    const initialCart = [];
    for (const id in saveCart) {
        const foundProducts = products.find(product => product.id === id);

        if (foundProducts) {
            foundProducts.quantity = saveCart[id];
            initialCart.push(foundProducts);
        }
    }
    return { products, initialCart };
};