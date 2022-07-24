import React from 'react'
import './topReviews.css'
import {Card, Button} from 'react-bootstrap'

function TopReviews(){
    return(
        <div className="reviews">
            <h1>
                Check Out These Reviews
            </h1>
            <ul className="img-rev">    
                <li>
                    <Card >
                        <Card.Img variant="top" src="/src/images/arduino.jpg" />
                        <Card.Body className="bg-dark">
                        <Card.Title className="title-center">Ed Sheeran</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                <Card>
                        <Card.Img variant="top" src="/src/images/micro.jpg" />
                        <Card.Body  className="bg-dark">
                        <Card.Title className="title-center">James Arthur</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                </li>
                <li>
                <Card>
                        <Card.Img variant="top" src="/src/images/music.jpg" />
                        <Card.Body className="bg-dark">
                        <Card.Title className="title-center">Shawn Mendes</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                <Card>
                        <Card.Img variant="top" src="/src/images/sports.png" />
                        <Card.Body className="bg-dark">
                        <Card.Title className="title-center">Charlie Puth</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </li>
            </ul>
        </div>
    );
}

export default TopReviews