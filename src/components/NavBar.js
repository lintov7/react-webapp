import {Container,  Navbar, Nav } from "react-bootstrap"
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation();
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React Assignment</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={location.pathname} defaultActiveKey="/">
              <Nav.Link href="/" eventKey="/">Home</Nav.Link>
              <Nav.Link href="/tools" eventKey="/tools">Tools</Nav.Link>
              <Nav.Link href="/services" eventKey="/services">Services</Nav.Link>
              <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;

