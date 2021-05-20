import React from 'react'
import { CardDeck, Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import cardImage from '../../Assets/Pcicon01.svg'
import cardImage2 from '../../Assets/Pcicon01.svg'
import cardImage3 from '../../Assets/Pcicon01.svg'
import "./Cards.css"


export const Cards2 = () => (
    <>
        <CardDeck className="text-center alignCard">
            <Card className="border-0 align-items-center">
                <Card.Img className="" id="sizeCardImg" variant="top" src={cardImage} />
                <Card.Body>
                    <Card.Title><h5>Password Generator</h5></Card.Title>
                    <Card.Text className="text">
                        Generate a new password by choosing your selection of type of characters and length
      </Card.Text>
                    <Button variant="flat" href="https://wildnei.github.io/passwordGenerator/">
                        Link to Application
      </Button>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="sizeCardImg" variant="top" src={cardImage2} />
                <Card.Body>
                    <Card.Title><h5>Quiz Game</h5></Card.Title>
                    <Card.Text className="text">
                        Play this fun Quiz game and get points by answering the right questions!
                    </Card.Text>
                    <Button variant="flat" href="https://github.com/wildnei/javascript-questionary">
                        Link to Application
      </Button>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="sizeCardImg" variant="top" src={cardImage3} />
                <Card.Body>
                    <Card.Title><h5>Game Search Website</h5></Card.Title>
                    <Card.Text className="text">
                        Looking for a new game? Quisa is here to help you the next game to play!
      </Card.Text>
                    <Button variant="flat" href="https://wildnei.github.io/quisa-project/">
                        Link to Application
      </Button>
                </Card.Body>
            </Card>
        </CardDeck>
    </>
);

