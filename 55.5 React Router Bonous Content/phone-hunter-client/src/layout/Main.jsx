import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>My Iphone Hunter</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;