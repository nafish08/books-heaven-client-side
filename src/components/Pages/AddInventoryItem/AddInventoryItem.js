import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddInventoryItem.css';

const AddInventoryItem = () => {
    return (
        <div className='container add_form my-5 rounded pb-4'>
            <h1 className='text-center py-4'>ADD NEW ITEM</h1>
            <Form>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Book name here" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Write Short Description" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="supplier" placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Image URL" />
                </Form.Group>
                <Button className='mb-3 py-3 w-25 d-block mx-auto' variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddInventoryItem;