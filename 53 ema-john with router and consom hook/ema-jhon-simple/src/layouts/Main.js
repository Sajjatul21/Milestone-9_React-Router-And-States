import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>


            {/* 53-3 Use Loader to load data and make it available in the component */}


        </div>
    );
};

export default Main;