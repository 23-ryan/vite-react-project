import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../styles/inventory.module.css'

function Sensor({updateCart}){
    const columnsPerRow = 2;
    return(
        <div className={styles.head}>
            <h1 className={styles.heading}>Sensors Section</h1>
            <Row xs={1} md={columnsPerRow} className="justify-content-center">
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>Temprature Sensor</Card.Title>
                        <Card.Img variant="top" src="/images/tempSensor.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 200 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>Temprature Sensor <span>200</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>Current Sensor</Card.Title>
                        <Card.Img variant="top" src="/images/currentSensor.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 500 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>Current Sensor <span>500</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
        </div>
    );
}

export default Sensor