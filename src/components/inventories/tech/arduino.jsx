import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../inventory.css'
function Arduino({list, setList, total, setCost}){
    const columnsPerRow = 2;
    function addCartItems(item){
        const newItemsList = [...list, item];
        setList(newItemsList);
    }

    const updateCost = (item)=>{
        setCost(total + parseInt(item.props.children[1].props.children));
    }

    return(
        <div>
            <h1>Arduino Board</h1>
                <Row xs={1} md={columnsPerRow}>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">UNO R3 SMD</Card.Title>
                    <Card.Img variant="top" src="/src/images/arduino.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 485 Rs</Card.Title>
                    <Button onClick={()=>{const x = <div className="cart-item">UNO R3 SMD <span>485</span>Rs</div>; addCartItems(x);updateCost(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">MEGA 2560 R3</Card.Title>
                    <Card.Img variant="top" src="/src/images/arduino.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 500 Rs</Card.Title>
                    <Button onClick={()=>{const x = <div className="cart-item">MEGA 2560 R3 <span>500</span>Rs</div>; addCartItems(x);updateCost(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
                </Row>
        </div>
    );
}

export default Arduino