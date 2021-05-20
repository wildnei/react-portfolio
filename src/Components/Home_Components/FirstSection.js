import React from 'react'
import { Row, Container, Col, CardDeck, Card, Button } from 'react-bootstrap'
import "./FirstSection.css"

export const FirstSection = () => (

    <>
        <Container>
            <Row id="marginRow">
                <Col xl="6" className="parent">
                    <CardDeck className="text-center cardAlign">
                        <Card className="mb-5 border-0 align-items-center">
                            <Card.Body>
                                <Card.Title><h2>Website Cordigelato.com</h2></Card.Title>
                                <Card.Text className="text">
                                    A new Gelato experience just arrived to San Diego, California. Visit the website and check out their flavors!
                            </Card.Text>
                                <Button variant="flat" href="https://cordigelato.com"> Visit Website </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
                <Col xl="6">
                    <div className="img0Div">
                        <div className="img0 mt-5" alt="people-training"></div>
                    </div>
                </Col>

            </Row>

        </Container>
    </>
);