import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonIcon from '../assets/icons/person.svg';
import { useNavigate } from 'react-router-dom';
import '../components/Header.css';

function Header() {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="navheader" fixed="top">
            <Container>
                {/* icono de colapso a la izquierda */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1 order-md-2" />      

                {/* título centrado */}
                <Navbar.Brand className="mx-auto order-2 order-md-1">
                    <span className='logo' onClick={() => {navigate("/")}}>Estilist</span>
                </Navbar.Brand>

                {/* colapso */}
                <Navbar.Collapse id="basic-navbar-nav" className="order-3 order-md-3">
                    <Nav className="ms-auto">
                        <Nav.Link className="order-1">Ideas</Nav.Link>
                        <NavDropdown title="Análisis" id="basic-nav-dropdown" className="custom-dropdown">
                            <NavDropdown.Item>Colorimetría</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {navigate('/upload-image')}}>Tipo de cuerpo y rostro</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Nuevo" id="basic-nav-dropdown" className="custom-dropdown">
                            <NavDropdown.Item>Cabello</NavDropdown.Item>
                            <NavDropdown.Item>Belleza</NavDropdown.Item>
                            <NavDropdown.Item>Outfits</NavDropdown.Item>
                            <NavDropdown.Item>Accesorios</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="order-2">Racha</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* icono de usuario a la derecha */}
                <Nav.Link className="ms-2 order-2 order-md-4" id="icono-persona" onClick={() => navigate("/profile")}>
                    <img src={PersonIcon} alt="Icono Persona" className="svg-icon-persona" />
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default Header;