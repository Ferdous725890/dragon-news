import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import loginIcon from '../../assets/user.png'

const NavBar = () => {
    return (
        <div className='w-11/12 container mx-auto mt-5 flex justify-between items-center'>
            <div className=""></div>
            <div className="nav space-x-3">
                <Link to='/home' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/carrer' >Carrer</Link>
            </div>
            <div className="logIn flex space-x-2 items-center">
                <p>
                    <img src={loginIcon} alt="" />
                </p>
                <NavLink to='/auth/login' className='btn btn-neutral rounded-none px-7 py-0  ' >Login</NavLink>
            </div>
        </div>
    );
};

export default NavBar;