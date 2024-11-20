import Carousel from 'react-bootstrap/Carousel';
import PageTitle from '../components/extras/PageTitle';

// EJEMPLOS
import pantalon from '../assets/photos/ejemplos/pantalon.png';
import falda from '../assets/photos/ejemplos/falda.png';
import chaqueta from '../assets/photos/ejemplos/chaqueta.png';
import camiseta from '../assets/photos/ejemplos/camiseta.png';
import bolsa from '../assets/photos/ejemplos/bolsa.png';

// Solo lo tenía para demostrar que funcionara
import FeedbackModal from "../components/extras/FeedbackModal";

const IdeasPage = () => {
    return (
        <div>
            {/* TITULO */}
            <div>
                <PageTitle>Ideas</PageTitle>
            </div>
            {/* CARRUSEL DE IDEAS Y SUGERENCIAS */}
            <div>
                <Carousel className = "carousel-design">
                    <Carousel.Item>
                        <img
                            src={pantalon}
                            alt="First slide"
                            className="d-block w-100"
                        />
                        
                        <div className="carousel-caption-below">
                            <div className="carousel-divider"></div>
                            <p className = "carousel-tag">Casual</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={camiseta}
                            alt="Second slide"
                            className="d-block w-100"
                        />
                        <div className="carousel-caption-below">
                            <div className="carousel-divider"></div>
                            <p className = "carousel-tag">Casual</p>
                            <p className = "carousel-tag">Básico</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={chaqueta}
                            alt="Third slide"
                            className="d-block w-100"
                        />
                        <div className="carousel-caption-below">
                            <div className="carousel-divider"></div>
                            <p className = "carousel-tag">Invierno</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={falda}
                            alt="Second slide"
                            className="d-block w-100"
                        />
                        <div className="carousel-caption-below">
                            <div className="carousel-divider"></div>
                            <p className = "carousel-tag">Otoño</p>
                            <p className = "carousel-tag">Boho</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={bolsa}
                            alt="Third slide"
                            className="d-block w-100"
                        />
                        <div className="carousel-caption-below">
                            <div className="carousel-divider"></div>
                            <p className = "carousel-tag">Clásico</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
                {/* 
                <FeedbackModal 
                show={true} 
                onHide={() => console.log("Cerrar modal")} 
                />
                */}
            </div>
        </div>
    );
};

export default IdeasPage;
