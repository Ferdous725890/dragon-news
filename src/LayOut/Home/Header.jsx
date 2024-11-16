import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' w-11/12 container mx-auto flex justify-center items-center flex-col  py-5 space-y-1'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <div>
            <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
            </div>
            <div>
                {
                    moment().format("dddd, MMMM Do YYYY")
                }
            </div>
        </div>
    );
};

export default Header;