import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Music({updateCart}){
    const columnsPerRow = 4;
    return(
        <div>
            <h1>Musical Instruments</h1>
            <Row xs={1} md={columnsPerRow}>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Guitar</Card.Title>
                        <Card.Img variant="top" src="/src/images/guitar.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 2000 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">Guitar <span>2000</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Thumb Piano</Card.Title>
                        <Card.Img variant="top" src="/src/images/thumbPiano.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 400 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">Thumb Piano <span>400</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Bongo</Card.Title>
                        <Card.Img variant="top" src="/src/images/bongo.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 1000 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">Bongo <span>1000</span>Rs</div>; updateCart(x);}} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                        <Card.Title className="title-center">Harmonium</Card.Title>
                        <Card.Img variant="top" src="/src/images/harmonium.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                        <Card.Title className="title-center">Price: 1000 Rs</Card.Title>
                        <Button onClick={()=>{const x = <div className="cart-item">Harmonium <span>1000</span>Rs</div>; updateCart(x);}}  variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}} >Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
        </div>
    );
}

export default Music