import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container bg-dark py-5 mt-5 rounded'>
            <h1 className='text-center text-light my-4'>Contact Us</h1>
            <div className='row'>
                <img src="https://i.ibb.co/37RYPDY/hot-line-contact-us-call-center-search-interface.jpg" className='img-fluid rounded col-6' alt="" />
                <div className='col-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;