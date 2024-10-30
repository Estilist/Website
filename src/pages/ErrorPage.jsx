import { useRouteError } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container className="text-center mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Oops!</Card.Title>
                            <Card.Text>Ocurrió un error inesperado.</Card.Text>
                            <Card.Text className="text-muted">
                                <i>{error.statusText || error.message}</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}