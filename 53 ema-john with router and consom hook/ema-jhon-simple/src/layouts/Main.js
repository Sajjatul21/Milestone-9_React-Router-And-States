import React from 'react';
import Header from '../component/Header/Header';
import Shop from '../component/Shop/Shop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Shop></Shop>

            {/* এবার আমরা চাচ্চি header টা common থাকবে বা সব সময় থাকবে আর shop টা change হবে।  commot অংশ টা যাবে layout এর আর বাকি অংশটা যেটা route অনুসারে change হবে সেটা Outlet এর যাবে।  */}

        </div>
    );
};

export default Main;