import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    // Destructuring product
    const { _id, name, description, price, quantity, supplier, img } = product;
    // useNavigate() hook for navigation
    const navigate = useNavigate();
    const navigateToItemDetails = _id => {
        // _id as parameter
        navigate(`/item/${_id}`);
    }
    return (
        <Col>
            <Card className='card_style'>
                <Card.Img variant="top" className='w-75 mx-auto pt-4' src={img} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <small>{description.substring(0, 250)}.....</small><br /><br />
                    <small><b>Price:</b> {price}BDT</small><br />
                    <small><b>Quantity:</b> {quantity}</small><br />
                    <small><b>Supplier Name:</b> {supplier}</small>
                </Card.Body>
                {/* By clicking the following button user will be navigate to the private route */}
                <Button onClick={() => navigateToItemDetails(_id)} className='m-3'>Stock Update</Button>
            </Card>
        </Col>
    );
};

export default Item;