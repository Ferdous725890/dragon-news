import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    return (
        <div>
           <NavLink to={`/category/${category.category_id}`} className='btn bg-base-100 w-full mb-3'>{category.category_name}</NavLink >
        </div>
    );
};

export default Category;