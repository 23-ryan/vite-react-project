import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sports({updateCart}){
    const columnsPerRow = 4;

    return(
        <div classname="list">
            <h1>Sports Inventory</h1>
                <Row xs={1} md={columnsPerRow}>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Skipping Rope</Card.Title>
                    <Card.Img variant="top" src="/src/images/skippingRope.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 200 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Skipping Rope <span>200</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Football</Card.Title>
                    <Card.Img variant="top" src="/src/images/football.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 500 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Football <span>500</span>Rs</div>; updateCart(x);}}variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card  style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Badminton Set</Card.Title>
                    <Card.Img variant="top" src="/src/images/badminton.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 450 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Badminton Set<span>450</span>Rs</div>; updateCart(x);}}variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Cricket Bat</Card.Title>
                    <Card.Img variant="top" src="/src/images/cricketBat.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 500 Rs</Card.Title>
                    <Button onClick = {()=>{const x = <div className="cart-item">Cricket Bat <span>500</span>Rs</div>; updateCart(x);}}variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                </Row>
        </div>
    );
}

export default Sports