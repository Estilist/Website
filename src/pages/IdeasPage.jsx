import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/photos/pantalon.png';
import PageTitle from '../components/extras/PageTitle';

const IdeasPage = () => {
    return (
        <div>
            {/* TITULO */}
            <div>
                <PageTitle>Ideas</PageTitle>
            </div>
            
            {/* CARRUSEL DE IDEAS Y SUGERENCIAS */}
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            src={ExampleCarouselImage}
                            alt="First slide"
                            className="d-block w-100"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={ExampleCarouselImage}
                            alt="Second slide"
                            className="d-block w-100"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={ExampleCarouselImage}
                            alt="Third slide"
                            className="d-block w-100"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default IdeasPage;
