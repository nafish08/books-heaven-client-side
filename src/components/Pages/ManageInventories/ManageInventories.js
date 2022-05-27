import React, { useEffect, useState } from 'react';
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
            <button>Add new item</button>
        </div>
    );
};

export default ManageInventories;