import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './AddInventoryItem.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AddInventoryItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const newItem = {
            userName: event.target.username.value,
            email: event.target.email.value,
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value,
            img: event.target.img.value,
        }
        axios.post('https://boiling-shore-92900.herokuapp.com/addNewItem', newItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Item is added!!')
                    // event.target.reset();
                }
            })
    }

    return (
        <div className='container add_form my-5 rounded pb-4'>
            <h1 className='text-center py-4'>ADD NEW ITEM</h1>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name='username' value={user.displayName} readOnly />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" name='email' value={user.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name='name' placeholder="Book name here" required />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} name='description' placeholder="Write Short Description" required />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name='price' placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="supplier" name='quantity' placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name='supplier' placeholder="Supplier Name" required />
                </Form.Group>
                <Form.Group className="mb-3 w-75 d-block mx-auto" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name='img' placeholder="Image URL" required />
                </Form.Group>
                <Button className='mb-3 py-3 w-25 d-block mx-auto' variant="primary" type="submit">
                    Add
                </Button>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddInventoryItem;