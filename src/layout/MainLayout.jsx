import React from 'react';
import Navbar from '../component/shared/navbar/Navbar';
import { Outlet } from 'react-router';

import Footert from '../component/shared/footer/Footert';


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
        
            <Outlet/>
            <Footert/>
        </div>
    );
};

export default MainLayout;