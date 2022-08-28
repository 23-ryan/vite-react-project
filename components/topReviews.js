import React from 'react'
import styles from '../styles/topReviews.module.css'
import {Card, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopReviews(){
    const columnsPerRow = 2;
    return(
        <div className={styles.reviews}>
            <h1 className={styles.heading}>
                Check Out These Reviews
            </h1>
            <Row xs={1} md={columnsPerRow} className="justify-content-center">
                    <Col md="auto">
                    <Card style={{ width: '38rem' }}>
                        <Card.Img variant="top" src="/images/arduino.jpg" />
                        <Card.Body className="bg-dark">
                        <Card.Title className={styles['reviewTitle']}>Ed Sheeran</Card.Title>
                        <Card.Text className={styles.text}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                <Col md="auto">
                <Card style={{ width: '38rem' }}>
                        <Card.Img variant="top" src="/images/micro.jpg" />
                        <Card.Body  className="bg-dark">
                        <Card.Title className={styles['reviewTitle']}>James Arthur</Card.Title>
                        <Card.Text className={styles.text}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
            <br />
            <br />
            <Row xs={1} md={columnsPerRow} className="justify-content-center">
                <Col md="auto">
                <Card style={{ width: '38rem' }}>
                
                        <Card.Img variant="top" src="/images/music.jpg" />
                        <Card.Body className="bg-dark">
                        <Card.Title className={styles['reviewTitle']}>Shawn Mendes</Card.Title>
                        <Card.Text className={styles.text}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <br />
                <Col md="auto">
                <Card style={{ width: '38rem' }}>
                        <Card.Img variant="top" src="/images/sports.png" />
                        <Card.Body className="bg-dark">
                        <Card.Title className={styles['reviewTitle']}>Charlie Puth</Card.Title>
                        <Card.Text className={styles.text}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
        </div>
    );
}

export default TopReviews