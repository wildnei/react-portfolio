import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import './Footer.css'

export const FooterContent = (props) => (

    <Container>
        {/* Column 1 */}
        <Row>
            <Col xs={4} className="footerColumn1">
                <ul className="list-unstyled">
                    <h6>About Me</h6>
                    <li className="bodyTextFooter"> Results-driven Front-End Developer, with experience in User Interface and User Experience
                    Design. Skilled in problem-solving, teamwork, creativity, and communication. A passionate
                    learner, well-rounded in terms of development, research, design, and marketing. Always
                    motivated in staying on top of new technologies and trends.</li>
                    <br></br>

                </ul>
            </Col>

            {/* EmptyColumn 2 */}
            <Col xs={3}>
            </Col>

            {/* Column 3 */}
            <Col xs={5}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contact-me</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Col>
        </Row>
    </Container>

);