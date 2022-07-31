import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './inventory.css'
function Sports(){
    return(
        <div>
            <h1>Sports Inventory</h1>
            <ul className="items">
                <li>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Skipping Rope</Card.Title>
                    <Card.Img variant="top" src="/src/images/skippingRope.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 200 Rs</Card.Title>
                    <Button variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </li>
                <li>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Football</Card.Title>
                    <Card.Img variant="top" src="/src/images/football.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 500 Rs</Card.Title>
                    <Button variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </li>
                <li>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Badminton Set</Card.Title>
                    <Card.Img variant="top" src="/src/images/badminton.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 450 Rs</Card.Title>
                    <Button variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </li>
                <li>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">Cricket Bat</Card.Title>
                    <Card.Img variant="top" src="/src/images/cricketBat.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 500 Rs</Card.Title>
                    <Button variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </li>
            </ul>
        </div>
    );
}

export default Sports