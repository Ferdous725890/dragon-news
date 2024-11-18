import React from 'react';
import Header from './src/LayOut/Home/Header';
import NavBar from './src/LayOut/Home/NavBar';

import { Link, useLoaderData } from 'react-router-dom';

const NewsDtails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    console.log("My Data", news);

    return (
        <div>
            <header>
              <Header></Header>
              <NavBar></NavBar>
            </header>
            <main className='w-11/12 container mx-auto grid-cols-12 gap-5 '>
            <section className='col-span-9' >
            <p className='text-4xl'>{news?._id}</p>
            <p><img src={news?.image_url} alt="" /></p>
            <p className='text-4xl'>{news?.details}</p>
            </section>
            <aside className='col-span-2' >

                <Link to={`/category/${news?.category_id}`} className='bg-red-500 '>Backto home</Link>

            </aside>
        
            </main>
        </div>
    );
};

export default NewsDtails;