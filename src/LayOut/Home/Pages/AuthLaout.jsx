import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const AuthLaout = () => {
    return (
        <div className='container mx-auto'>
            <header className='border border-red-500'>
                <NavBar></NavBar>
            </header>
            <div className='w-[400px] mx-auto mt-10'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLaout;