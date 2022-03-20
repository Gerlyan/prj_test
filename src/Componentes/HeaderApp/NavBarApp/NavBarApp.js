import React from 'react';
import './NavBarApp.css';
import {Nav, Navbar, Container} from 'react-bootstrap';

class NavBarApp extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){        
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#inicio">Proyecto de prueba</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Consultas">Consultas</Nav.Link>
                        <Nav.Link href="#clima">Pronóstico del clima</Nav.Link>
                    </Nav>
                </Container>
          </Navbar>
        );
    }
}

export default NavBarApp;