import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    const { _id, name, description, price, quantity, supplier, img } = product;
    const navigate = useNavigate();
    const navigateToItemDetails = _id => {
        navigate(`/item/${_id}`);
    }
    return (
        <Card className='col-lg-4 col-md-4 col-12'>
            <Card.Img variant="top" className='w-75 mx-auto pt-4' src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <small>{description.substring(0, 250)}.....</small><br /><br />
                <small><b>Price:</b> {price}BDT</small><br />
                <small><b>Quantity:</b> {quantity}</small><br />
                <small><b>Supplier Name:</b> {supplier}</small>
            </Card.Body>
            <Button onClick={() => navigateToItemDetails(_id)} className='m-3'>Stock Update</Button>
        </Card>
    );
};

export default Item;