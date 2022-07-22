import React from 'react'
import {Button, Form} from 'react-bootstrap'
import './connectForm.css'

function ConnectForm(){
    return (
        <div>
            <h1>Connect With Us</h1>
            <p className="connect-line">Get more personalised experience by subscribing to our news letter</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="input-heading">Name</Form.Label>
                <Form.Control className="write-text" type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="input-heading">Email address</Form.Label>
                <Form.Control className="write-text" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRoom">
                <Form.Label className="input-heading">Contact Details</Form.Label>
                <Form.Control className="write-text" type="number" placeholder="Contact number" />
                </Form.Group>
            </Form>
            <div className="btn">
                <Button variant="dark">Submit</Button>
            </div>
        </div>
    );
}

export default ConnectForm