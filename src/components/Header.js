import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Tags</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/neon">Neon</Nav.Link>
                    <Nav.Link href="/pure">Pure</Nav.Link>
                    <Nav.Link href="/page">Page Break</Nav.Link>
                    <Nav.Link href="/line">Line Sheet</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default Header
