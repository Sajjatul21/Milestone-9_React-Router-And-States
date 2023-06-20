import { getShoppingCart } from '../../utilities/fakedb';
export const { productsAndCartLoader, previousCart } = async () => {
    // get Products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // console.log("products:-", products);

    // get Cart
    const saveCart = getShoppingCart();
    const previousCart = [];
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);

        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            previousCart.push = addedProduct;
        }
    }
    return { products, previousCart };

    // 53-5 Import Cart from loader and Display Shopping cart

};