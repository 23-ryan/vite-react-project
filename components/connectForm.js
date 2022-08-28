import React from 'react'
import {Button, Form} from 'react-bootstrap'
import styles from '../styles/connectForm.module.css'

function ConnectForm(){
    return (
        <div>
            <h1 className={styles.heading}>Connect With Us</h1>
            <p className={styles['connect-line']}>Get more personalised experience by subscribing to our news letter</p>
            <Form>
                <Form.Group className={styles['mb-3']} controlId="formBasicName">
                <Form.Label className={styles['input-heading']}>Name</Form.Label>
                <Form.Control className={styles['write-text']} type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className={styles['mb-3']} controlId="formBasicEmail">
                <Form.Label className={styles['input-heading']}>Email address</Form.Label>
                <Form.Control className={styles['write-text']} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className={styles['mb-3']} controlId="formBasicRoom">
                <Form.Label className={styles['input-heading']}>Contact Details</Form.Label>
                <Form.Control className={styles['write-text']} type="number" placeholder="Contact number" />
                </Form.Group>
            </Form>
            <div className={styles.btn}>
                <Button variant="dark">Submit</Button>
            </div>
        </div>
    );
}

export default ConnectForm