import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../components/PrimaryButton";
import { Col, Row } from 'react-bootstrap';
import SecondaryButton from '../components/SecondaryButton';
import PageTitle from '../components/PageTitle';

const InicioPage = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Botón de Iniciar Sesión y Registrarme */}
            <PageTitle>Inicio</PageTitle>

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
        </>
    );
};

export default InicioPage;