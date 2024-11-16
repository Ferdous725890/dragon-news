import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const CategoryNews = () => {
    const { data: news } = useLoaderData()
  
    return (
        <div>
          <h2 className='font-semibold mb-3 mt-3 ' >Dragon News Home</h2>

          <div>
            {
              news.map((card,index )=> <Card key={index} card={card} ></Card>)
            }
          </div>
        </div>
    );
};

export default CategoryNews;