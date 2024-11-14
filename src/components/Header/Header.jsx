import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonIcon from '../../assets/icons/person.svg';
import { useNavigate } from 'react-router-dom';
import '../../components/Header.css';

function Header() {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleItemClick = (path) => {
        navigate(path);
        setExpanded(false);
    };

    return (
        <Navbar expand="lg" className="navheader" fixed="top" expanded={expanded}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1 order-md-2" onClick={handleToggle} />      

                <Navbar.Brand className="mx-auto order-2 order-md-1">
                    <span className='logo' onClick={() => { navigate("/"); setExpanded(false); }}>Estilist</span>
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav" className="order-3 order-md-3">
                    <Nav className="ms-auto">
                        <Nav.Link className="order-0" onClick={() => handleItemClick('/')}>Ideas</Nav.Link>
                        <NavDropdown title="Análisis" id="basic-nav-dropdown" className="custom-dropdown">
                            <NavDropdown.Item onClick={() => handleItemClick('/colorimetria')}>Colorimetría</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleItemClick('/upload-image')}>Tipo de cuerpo y rostro</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Nuevo" id="basic-nav-dropdown" className="custom-dropdown">
                            <NavDropdown.Item onClick={() => setExpanded(false)}>Cabello</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)}>Belleza</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)}>Outfits</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)}>Accesorios</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="order-2" onClick={() => setExpanded(false)}>Racha</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav.Link className="ms-2 order-2 order-md-4" id="icono-persona" onClick={() => { navigate('/profile'); setExpanded(false); }}>
                    <img src={PersonIcon} alt="Icono Persona" className="svg-icon-persona" />
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default Header;