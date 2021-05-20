import React from 'react'
import { Row, Container, Col, CardDeck, Card, Button } from 'react-bootstrap'
import "./SecondSection.css"


export const SecondSection = () => (
    <>
         <Container className="Container">
            <Row id="marginRow">
                <Col xl="6" className="left_bottom">
                    <div className="img2Div">
                        <div className="img2" alt="people-training"></div>
                    </div>
                </Col>
                <Col xl="6" className="right_top">
                    <CardDeck className="text-center cardAlign2">
                        <Card className="border-0 align-items-center">
                            <Card.Body>
                                <Card.Title><h2>Website devdojo.academy</h2></Card.Title>
                                <Card.Text className="text">
                                    We rebuilt our community project website to translate our ideas to new users in English.
                        </Card.Text>
                                <Button variant="flat" href="https://devdojo.academy"> Visit Website </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    </>


);