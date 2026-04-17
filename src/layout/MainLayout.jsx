import React from 'react';
import Navbar from '../component/shared/navbar/Navbar';
import { Outlet } from 'react-router';

import Footert from '../component/shared/footer/Footert';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
        
            <Outlet/>
                    <ToastContainer />

            <Footert/>
        </div>
    );
};

export default MainLayout;