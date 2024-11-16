import moment from 'moment';
import React from 'react';
import { FaShareSquare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa6';

const Card = ({ card }) => {
    const { author, title, thumbnail_url,details,rating,total_view } = card

    return (
        <div>
            <div className='mb-14 p-5' >
                <div className='flex justify-between' >
                <div className='flex' >
                    <img className='w-14 rounded-full bg-gray-400' src={author.img} alt="" />
                    <div>
                    <h2>{author.name}</h2>
                    {
                        moment().format(" Y, M, d")
                    }
                    </div>
                </div>
                <div className='flex'>
                    <FaBookmark></FaBookmark>
                    <FaShareSquare></FaShareSquare>
                </div>
                </div>

                <div>
                    <h1> {title} </h1>
                    <p><img className='w-full h-[500px]' src={thumbnail_url} alt="" /></p>
                    <p> {details} </p>
                    <p> {rating.number} </p>
                    <p> {total_view} </p>
                </div>
            </div>
        </div>
    );
};

export default Card;