import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../styles/inventory.module.css'

function BroadBand({updateCart}){
    const columnsPerRow = 2;
    return(
        <div className={styles.head}>
            <h1 className={styles.heading}>BroadBand Section</h1>
            <Row xs={1} md={columnsPerRow} className="justify-content-center">
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>ROUTER 1</Card.Title>
                        <Card.Img variant="top" src="/images/router1.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 1200 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>ROUTER 1 <span>1200</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className={styles['title-center']}>ROUTER 2</Card.Title>
                        <Card.Img variant="top" src="/images/router2.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className={styles['title-center']}>Price: 1100 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className={styles['cart-item']}>ROUTER 2 <span>1100</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
        </div>
    );
}

export default BroadBand