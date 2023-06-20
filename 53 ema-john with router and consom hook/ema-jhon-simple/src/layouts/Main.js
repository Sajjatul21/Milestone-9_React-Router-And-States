import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            

            {/* এবার আমরা চাচ্চি header টা common থাকবে বা সব সময় থাকবে আর shop টা change হবে।  commot অংশ টা যাবে layout এর আর বাকি অংশটা যেটা route অনুসারে change হবে সেটা Outlet এর যাবে।  */}

        </div>
    );
};

export default Main;