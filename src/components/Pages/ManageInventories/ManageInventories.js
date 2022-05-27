import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../Item/Item';
import './ManageInventories.css';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center my-4'>Inventory Items</h1>
            <div className='row g-3'>
                {
                    products.map(product => <Item
                        key={product._id}
                        product={product}
                    ></Item>)
                }
            </div>
            <Link className='text-decoration-none' to={'/addInventoryItem'}><button className='btn link_button d-block mx-auto mt-5'>Add new item</button></Link>
        </div>
    );
};

export default ManageInventories;