import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='w-11/12 container mx-auto flex items-center gap-2 bg-gray-300 rounded-md py-1 px-2'>
            <p className='bg-[#D72050] w-[8%] text-center py-1 text-white ' >
                LatestNews
            </p>
            <Marquee pauseOnHover={true} className='space-x-5'  behavior="" direction="left">
            <Link to='./news' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate error nesciunt dicta? Cum nam, temporibus magni odio provident tempore. |
            </Link>
            <Link to='./news' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate error nesciunt dicta? Cum nam, temporibus magni odio provident tempore. |
            </Link>
            <Link to='./news' > |
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate error nesciunt dicta? Cum nam, temporibus magni odio provident tempore. |
            </Link>
            <Link to='./news' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate error nesciunt dicta? Cum nam, temporibus magni odio provident tempore. |
            </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;