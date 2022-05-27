import React from 'react';
import Banner from '../../Banner/Banner';
import Items from '../../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center my-3'>Choose Your Desired Books</h2>
            <Items></Items>
        </div >
    );
};

export default Home;