import { getStoredCart } from "../utils/fakeDB";

export const getCartAndProductsData = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const saveCart = getStoredCart();
    const inatialCart = [];
    for (const id in saveCart) {
        const foundProducts = products.find(product => product.id === id);
        if (foundProducts) {
            const quantity = foundProducts[id];
            foundProducts.quantity = quantity;
            inatialCart.push(foundProducts);

        }
    }

    return { products, inatialCart };
};