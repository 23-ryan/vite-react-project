import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../styles/inventory.module.css'
function Arduino({updateCart}){
    const columnsPerRow = 2;
    return(
        <div className={styles.head}>
            <h1 className={styles.heading}>Arduino Board</h1>
                <Row xs={1} md={columnsPerRow} className="justify-content-center">
                <Col md="auto">
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className={styles['title-center']}>UNO R3 SMD</Card.Title>
                    <Card.Img variant="top" src="/images/arduino.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className={styles['title-center']}>Price: 485 Rs</Card.Title>
                    <Button onClick={()=>{const x = <div className={styles['cart-item']}>UNO R3 SMD <span>485</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col md="auto">
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className={styles['title-center']}>MEGA 2560 R3</Card.Title>
                    <Card.Img variant="top" src="/images/arduino.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className={styles['title-center']}>Price: 500 Rs</Card.Title>
                    <Button onClick={()=>{const x = <div className={styles['cart-item']}>MEGA 2560 R3 <span>500</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                </Row>
        </div>
    );
}

export default Arduino