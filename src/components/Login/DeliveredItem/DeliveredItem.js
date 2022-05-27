import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const DeliveredItem = ({ product }) => {
    const [total, setTotal] = useState(product.quantity);
    const { _id, name, description, price, quantity, supplier, img } = product;
    const reduceQuantity = selectedProduct => {
        if (selectedProduct.quantity > 0) {
            selectedProduct.quantity = quantity - 1;
        }
        setTotal(selectedProduct.quantity);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const amount = event.target.number.value;
    }

    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center'>
                <img className='img-fluid' src={img} alt='' />
                <div>
                    <Card.Title>{name}</Card.Title>
                    <small>{description}</small><br /><br />
                    <small><b>Price:</b> {price}BDT</small><br />
                    <small><b>Quantity:</b> {total}</small><br />
                    <small><b>Supplier Name:</b> {supplier}</small><br />
                    <Button onClick={() => reduceQuantity(product)} className='my-3'>Delivered</Button>
                </div>
            </div>
            <div>
                <h1 className='text-center my-4'>Restock The Item</h1>
                <Form className='row' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
                        <Form.Control name='number' type="number" placeholder="Enter number" />
                    </Form.Group>
                    <Button className='col-12 w-25 d-block mx-auto' variant="primary" type="submit">
                        Increase
                    </Button>
                </Form>
            </div>
        </div>
    );
};
export default DeliveredItem;