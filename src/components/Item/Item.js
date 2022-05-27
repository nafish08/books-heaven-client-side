import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({ product }) => {
    const { name, description, price, quantity, supplier, img } = product;
    return (
        <Card className='col-lg-4 col-md-4 col-12'>
            <Card.Img variant="top" className='img-fluid' src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <small>{description}</small><br /><br />
                <small><b>Price:</b> {price}BDT</small><br />
                <small><b>Quantity:</b> {quantity}</small><br />
                <small><b>Supplier Name:</b> {supplier}</small>
            </Card.Body>
            <Button className='m-3'>Stock Update</Button>
        </Card>
    );
};

export default Item;