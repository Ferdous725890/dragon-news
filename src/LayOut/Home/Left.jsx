import React, { useEffect, useState } from 'react';
import Category from './Category';

const Left = () => {
    const [caterores, setCategores] = useState([])
    useEffect( () =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data =>setCategores(data.data.news_category))
    },[])
    return (
        <div>
        <h2 className='font-semibold' >All Caterogy {caterores.length} </h2>
        {
            caterores.map(category => <Category key={category.category_id} category={category} ></Category> )
        }
        </div>
    );
};

export default Left;