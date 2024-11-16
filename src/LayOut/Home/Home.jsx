import React from 'react';
import Header from './Header';
import LatestNews from './LatestNews';
import NavBar from './NavBar';
import Main from './Main';
import Left from './Left';
import Right from './Right';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-popince' >
            {/* header
            nav
            main
            footer */}

            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav>
                <NavBar></NavBar>
            </nav>

            <main className='w-11/12 container mx-auto grid grid-cols-12 gap-2'>
                <aside className='col-span-3 border border-red-500'>
                    <Left></Left>
                </aside>
                <section className='col-span-6 border border-red-500'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 border border-red-500'>
                    <Right></Right>
                </aside>
               
            </main>





        </div>
    );
};

export default Home;