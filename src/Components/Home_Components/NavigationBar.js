import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import "./NavigationBar.css";
import navBarImage from "../../Assets/logowill.svg"

export const NavigationBar = () => (
    <>
        <Navbar id="navBackground" collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={navBarImage}
                    width=""
                    height=""
                // className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse >
                <Nav className="ml-auto">
                    <Nav.Link className="textNavBar" href="/main">About-me</Nav.Link>
                    <Nav.Link className="textNavBar" href="https://github.com/wildnei">Github</Nav.Link>
                    <Nav.Link className="textNavBar" href="https://ik.imagekit.io/devdojo/Resume/Wildnei_Resume_SONYYChcR.pdf">Resume</Nav.Link>
                    <Button variant="flat" href="https://www.linkedin.com/in/wildneisuane/"> LinkedIn </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);