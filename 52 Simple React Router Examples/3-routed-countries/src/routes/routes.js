import { createBrowserRouter } from "react-router-dom";
import Countries from "../components/Countries";

export const router = createBrowserRouter([
    { path: '/', element: <Countries></Countries> }
]);