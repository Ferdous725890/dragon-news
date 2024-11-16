import React from 'react';

import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='mt-6 w-full ' >
            <h2 className='font-semibold text-lg' > Find Us On</h2>
            <div className="join flex join-vertical mt-5 *:bg-base-100 items-center">
                <button className="btn join-item w-full justify-start">
                <FaFacebook />
                    Google
                </button>
                <button className="btn join-item w-full justify-start">
                <FaTwitter />
                    Twiter
                </button>
                <button className="btn join-item w-full justify-start">
                <FaInstagram />
                    Instagrma
                </button>
            </div>
        </div>
    );
};

export default FindUs;    