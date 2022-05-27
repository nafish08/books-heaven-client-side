import React from 'react';
import Banner from '../../Banner/Banner';
import Category from '../../Category/Category';
import Items from '../../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center my-4'>Books Categories</h1>
            <Category></Category>
            <Items></Items>
        </div >
    );
};

export default Home;