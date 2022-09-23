import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MicroControl({updateCart}){
    const columnsPerRow = 3;
    return(
        <div>
            <h1>Micro Controlllers</h1>
            <Row xs={1} md={columnsPerRow}>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Atitiny</Card.Title>
                        <Card.Img variant="top" src="/src/images/micro2.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 800 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">Atitiny <span>800</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Arduino Board</Card.Title>
                        <Card.Img variant="top" src="/src/images/micro1.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 1500 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">Arduino Board <span>1500</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">ESP Wroom-32</Card.Title>
                        <Card.Img variant="top" src="/src/images/micro3.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 500 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">ESP Wroom-32 <span>500</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
        </div>
    );
}

export default MicroControl