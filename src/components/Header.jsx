import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/Header.css'

function Header() {
  return (
    <Navbar expand="lg" className="navheader">
      <Container>
        <Navbar.Brand>Estilist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
      </Container>
    </Navbar>
  );
}

export default Header;