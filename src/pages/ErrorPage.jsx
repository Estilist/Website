import { useNavigate, useRouteError } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

export default function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);

    const styles = {
        fontFamily: "var(--texto-font)",
        fontSize: "22px",
        maxWidth: "500px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px"
    }

    return (
        <>
            <Header />
            <Container className="text-center" style={styles}>
                <Row className="justify-content-center">
                    <Col md={12}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Ocurrió un error inesperado</Card.Title>
                                <Card.Text className="text-muted">
                                    <i>{error.statusText || error.message}</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <PrimaryButton onClick={() => navigate(-1)}>
                            Volver
                        </PrimaryButton>
                    </Col>
                </Row>
            </Container>
        </>
    );
}