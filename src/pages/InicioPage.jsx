import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from '../components/buttons/SecondaryButton';
import CollageImg from '../assets/photos/collage.png';
import BannerImg from '../assets/photos/banner.jpg';

const InicioPage = () => {
    const navigate = useNavigate();

    return (
        <div className = "inicio-page">
            {/* BANNER */}
            <div className="inicio-banner">
                <div className="inicio-imagen">
                    <img src={BannerImg} alt="Banner" />
                </div>
                <div className="banner-text">
                    <h1>Bienvenido a <span className="brand-name">Estilist</span></h1>
                </div>
            </div>
            {/* COLLAGE */}
            <div className = "inicio-texto">
                <p> Descubre lo que podemos lograr con tu estilo</p>
            </div>
            <div className = "inicio-collage">
                <img src={CollageImg} alt="Collage"/>
            </div>
            {/* BOTONES */}
            <div className = "inicio-subtitulo">
                <p> ¡Te invitamos a que inicies!</p>
            </div>
            {/* BOTONES */}
            <div className = "inicio-botones">
            <Row className="justify-content-center align-items-center">
                <Col xs="auto">
                    <PrimaryButton onClick={() => navigate('/login')}>
                        Iniciar Sesión
                    </PrimaryButton>
                </Col>
                <Col xs="auto">
                    <SecondaryButton onClick={() => navigate('/register')}>
                        Registrarme
                    </SecondaryButton>
                </Col>
            </Row>
            </div>
            <div className = "inicio-texto">
                <p>Sobre nosotros</p>
            </div>
            <div className = "inicio-pie">
                <p>© 2024 Estilist. Todos los derechos reservados.</p>
            </div>
        </div>
    );
};

export default InicioPage;