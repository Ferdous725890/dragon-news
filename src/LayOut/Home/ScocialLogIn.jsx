import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa6";

const ScocialLogIn = () => {
    return (
        <div className=''>
        <h2 className='mb-5 font-semibold text-2xl'>Login Width</h2>
        <button className="btn btn-outline btn-info mb-2 text-blue-50 border w-full text-start ">
            <FaGoogle></FaGoogle>
            Login Width Google </button>
        <button className="btn btn-outline btn-info text-blue-50 border w-full text-start">
            <FaGithub></FaGithub>
            Login Width GitHub </button>
    </div>
    );
};

export default ScocialLogIn;