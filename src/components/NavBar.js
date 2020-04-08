import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar(props) {
    return (
        <div className="navBar">
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">MMA Management</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/FighterApp">Fighter App</Nav.Link>
                <Nav.Link href="/FighterStats">Fighter Stats</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}