import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    console.log(useParams());
    return (
        <div>
            <h2>Private Route{itemId}</h2>
        </div>
    );
};

export default ItemDetails;