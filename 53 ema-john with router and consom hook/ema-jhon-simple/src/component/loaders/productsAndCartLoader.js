import { getShoppingCart } from '../../utilities/fakedb';
export const productsAndCartLoader = async () => {
    // get Products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // console.log("products:-", products);

    // get Cart
    const saveCart = getShoppingCart();
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        console.log(addedProduct);
        if (addedProduct) {
            const quantity = saveCart[id];
            console.log(id, quantity);
        }
    }
    return products;
};