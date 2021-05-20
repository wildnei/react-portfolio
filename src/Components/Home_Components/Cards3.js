import React from 'react'
import { CardDeck, Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import cardImage from '../../Assets/roundedimg01.svg'
import cardImage2 from '../../Assets/Pcicon01.svg'
import cardImage3 from '../../Assets/Pcicon01.svg'
import cardImage4 from '../../Assets/Pcicon01.svg'
import "./Cards.css"


export const Cards3 = () => (
    <>
        <CardDeck className="text-center alignCard">
            <Card className="border-0 align-items-center">
                <Card.Img className="" id="sizeCardImg" variant="top" src={cardImage4} />
                <Card.Body>
                    <Card.Title><h5>Note Taker</h5></Card.Title>
                    <Card.Text className="text">
                        A simple application to keep your notes saved anytime you need!
      </Card.Text>
                    <Button variant="flat" href="https://github.com/wildnei/notetaker_generator#Link-to-deployed-application">
                        Link to Application
      </Button>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="sizeCardImg" variant="top" src={cardImage2} />
                <Card.Body>
                    <Card.Title><h5>Employee Tracker</h5></Card.Title>
                    <Card.Text className="text">
                        Allows you to create and manage employees and their roles
                    </Card.Text>
                    <Button variant="flat" href="https://github.com/wildnei/backend_employee_tracker">
                        Link to Application
      </Button>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="sizeCardImg" variant="top" src={cardImage3} />
                <Card.Body>
                    <Card.Title><h5>Dapper Project</h5></Card.Title>
                    <Card.Text className="text">
                        We build a Bakery Order System in order to help an company organize their orders
      </Card.Text>
                    <Button variant="flat" href="https://github.com/wildnei/Dapper-Project">
                        Link to Application
      </Button>
                </Card.Body>
            </Card>
        </CardDeck>
    </>
);

