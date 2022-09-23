import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/inventory.module.css'


function Sports({updateCart}){
    const columnsPerRow = 4;
    return(
        <div classname={styles.head} style={{"text-align": "center"}}>
            <h1 className={styles.heading}>Sports Inventory</h1>
                <Row xs={1} md={columnsPerRow} className="justify-content-center">
                <Col md="auto">
                <Card style={{ width: '18rem' }}>
                <Card.Body className={`bg-dark`}>
                    <Card.Title className={styles['title-center']}>Skipping Rope</Card.Title>
                    <Card.Img variant="top" src="/images/skippingRope.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className={styles['title-center']}>Price: 200 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Skipping Rope <span>200</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col md="auto">
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark">
                    <Card.Title className={styles['title-center']}>Football</Card.Title>
                    <Card.Img variant="top" src="/images/football.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className={styles['title-center']}>Price: 500 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Football <span>500</span>Rs</div>; updateCart(x);}}variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col md="auto">
                <Card  style={{ width: '18rem' }}>
                <Card.Body className="bg-dark">
                    <Card.Title className={styles['title-center']}>Badminton Set</Card.Title>
                    <Card.Img variant="top" src="/images/badminton.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className={styles['title-center']}>Price: 450 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Badminton Set<span>450</span>Rs</div>; updateCart(x);}}variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col md="auto">
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark">
                    <Card.Title className={styles['title-center']}>Cricket Bat</Card.Title>
                    <Card.Img variant="top" src="/images/cricketBat.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className={styles['title-center']}>Price: 500 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Cricket Bat <span>500</span>Rs</div>; updateCart(x);}}variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                </Row>
        </div>
    );
}

export default Sports