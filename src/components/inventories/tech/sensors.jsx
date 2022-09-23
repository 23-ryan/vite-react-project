import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sensor({updateCart}){
    const columnsPerRow = 2;
    return(
        <div>
            <h1>Sensors Section</h1>
            <Row xs={1} md={columnsPerRow}>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Temprature Sensor</Card.Title>
                        <Card.Img variant="top" src="/src/images/tempSensor.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 200 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">Temprature Sensor <span>200</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Current Sensor</Card.Title>
                        <Card.Img variant="top" src="/src/images/currentSensor.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 1000 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">ROUTER 2 <span>1000</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
        </div>
    );
}

export default Sensor