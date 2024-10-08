import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light py-5 mb-0 ">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre o Projeto</h5>
            <p>
              Este é um site informativo sobre a Fórmula E, 
              desenvolvido como um projeto acadêmico.
            </p>
          </Col>
          <Col md={4}>
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p>Email: contato@example.com</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Fórmula E - Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;