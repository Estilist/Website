import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../components/PrimaryButton";
import { Col, Container, Row } from 'react-bootstrap';
import SecondaryButton from '../components/SecondaryButton';

const InicioPage = () => {
    const navigate = useNavigate();

    return (
        <>
        
            {/* Botón de Iniciar Sesión y Registrarme */}
            <Container className="text-center mt-5s">
                <Row>
                        <Col>
                        <h1>Inicio</h1>
                        </Col>
                </Row>
                <Row>
                    <Col>
                        <PrimaryButton onClick={() => navigate('/login')}>
                            Iniciar Sesión
                        </PrimaryButton>
                    </Col>
                    <Col>
                        <SecondaryButton onClick={() => navigate('/register')}>
                            Registrarme
                        </SecondaryButton>
                    </Col>
                </Row>
            </Container> 
        </>
    );
};

export default InicioPage;