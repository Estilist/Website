import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonIcon from '../assets/icons/person.svg';
import '../components/Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="navheader">
      <Container>
        {/* Ícono de colapso a la izquierda */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
        
        {/* Título centrado */}
        <Navbar.Brand className="mx-auto order-2">Estilist</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav" className="order-3">
          <Nav className="ms-auto">
            <Nav.Link>Ideas</Nav.Link>
            <NavDropdown title="Análisis" id="basic-nav-dropdown">
              <NavDropdown.Item>Colorimetría</NavDropdown.Item>
              <NavDropdown.Item>Tipo de cuerpo y rostro</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nuevo" id="basic-nav-dropdown">
              <NavDropdown.Item>Cabello</NavDropdown.Item>
              <NavDropdown.Item>Belleza</NavDropdown.Item>
              <NavDropdown.Item>Outfits</NavDropdown.Item>
              <NavDropdown.Item>Accesorios</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Racha</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#" className="ms-auto order-4" id="icono-persona">
          <img src={PersonIcon} alt="Icono Persona" className="svg-icon-persona" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;