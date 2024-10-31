import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

export default function Root() {
    return (
        <div>
            <Header />
            <Container className="text-center mt-4">
                <Outlet />
            </Container>
        </div>
    )
}