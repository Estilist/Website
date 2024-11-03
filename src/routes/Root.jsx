import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

export default function Root() {
    const styles = {
        fontFamily: "var(--texto-font)",
        fontSize: "22px",
        maxWidth: "500px",
        margin: "0 auto",
        marginTop: "70px",
        padding: "20px"
    }

    return (
        <div>
            <Header />
            <Container className="text-center" style={styles}>
                <Outlet />
            </Container>
        </div>
    )
}