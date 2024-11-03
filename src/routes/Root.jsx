import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

export default function Root() {
    return (
        <div>
            <Header />
            <Container className="text-center" style={{marginTop: "90px"}}>
                <Outlet />
            </Container>
        </div>
    )
}