import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import { getCartAndProductsData } from "../loaders/getCart&ProductsData";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: getCartAndProductsData,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/shop', element: <Shop /> },
            { path: '/cart', element: <Cart /> }, // set cart path
            { path: '/about', element: <About /> },
        ]

    }
]);

export default router;