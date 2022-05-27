import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../Item/Item';
import DeliveredItem from '../DeliveredItem/DeliveredItem';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const updateItem = products.filter(u => u._id === itemId)
    return (
        <div>
            {
                updateItem.map(product => <DeliveredItem
                    key={product._id}
                    product={product}
                ></DeliveredItem>)
            }
        </div>
    );
};

export default ItemDetails;