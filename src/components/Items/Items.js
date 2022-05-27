import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h2>Inventory Items</h2>
            <div className='row g-3'>
                {
                    products.map(product => <Item
                        key={product._id}
                        product={product}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;