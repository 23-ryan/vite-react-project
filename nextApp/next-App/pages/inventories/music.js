import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/inventory.module.css';

function Music({updateCart}){
    const columnsPerRow = 4;
    return(
        <div className={styles.head}>
            <h1 className={styles.heading}>Musical Instruments</h1>
            <Row xs={1} md={columnsPerRow} className="justify-content-center">
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>Guitar</Card.Title>
                        <Card.Img variant="top" src="/images/guitar.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 2000 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>Guitar <span>2000</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>Thumb Piano</Card.Title>
                        <Card.Img variant="top" src="/images/thumbPiano.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 400 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>Thumb Piano <span>400</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>Bongo</Card.Title>
                        <Card.Img variant="top" src="/images/bongo.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 1000 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>Bongo <span>1000</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>Harmonium</Card.Title>
                        <Card.Img variant="top" src="/images/harmonium.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 1000 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>Harmonium <span>1000</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
        </div>
    );
}

export default Music