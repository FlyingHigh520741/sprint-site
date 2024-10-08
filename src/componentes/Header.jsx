import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../imagens/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LogoImage = styled.img`
  width: 200px;
  height: 100px;
`;

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary my=0 sticky-top">
            <Container className='mx-0'>
                <Navbar.Brand as={Link} to="/">
                    <LogoImage src={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
                        <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
