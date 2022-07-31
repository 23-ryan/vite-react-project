import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap'
import '../inventory.css'
function Arduino(){

    const handleClick = ()=>{
        
    }



    return(
        <div>
            <h1>Arduino Board</h1>
            <ul className="items">
                <li>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">UNO R3 SMD</Card.Title>
                    <Card.Img variant="top" src="/src/images/arduino.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 485 Rs</Card.Title>
                    <Button onClick={handleClick()} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </li>
                <li>
                <Card style={{ width: '18rem' }}>
                <Card.Body className="bg-dark" style = {{'justify':'center'}}>
                    <Card.Title className="title-center">MEGA 2560 R3</Card.Title>
                    <Card.Img variant="top" src="/src/images/arduino.jpg" style={{'width':'100%', 'padding':'1em 0'}}/>
                    <Card.Title className="title-center">Price: 500 Rs</Card.Title>
                    <Button onClick={handleClick} variant="primary" style={{'font-weight':'bold', 'margin':'0.3em auto'}}>Add To Cart</Button>
                </Card.Body>
                </Card>
                </li>
            </ul>
        </div>
    );
}

export default Arduino