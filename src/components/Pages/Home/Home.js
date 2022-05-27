import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Category from '../../Category/Category';
import Contact from '../../Contact/Contact';
import Items from '../../Items/Items';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center my-4'>Books Categories</h1>
            <Category></Category>
            <Items></Items>
            <Link to={'/manageInventories'} className='btn w-25 link_button d-block mx-auto mt-5'>Manage Inventories</Link>
            <Contact></Contact>
        </div >
    );
};

export default Home;