import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <div className='container mt-4'>
            <div className='row'>
                <img className='img-fluid col-6 w-25' src={img} alt='' />
                <div className='col-6'>
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
            <Link to={'/manageInventories'} className='btn w-25 link_button d-block mx-auto mt-5'>Manage Inventories</Link>
        </div>
    );
};
export default DeliveredItem;