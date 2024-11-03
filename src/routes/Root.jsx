import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { SessionProvider } from "../contexts/SessionContext";

export default function Root() {
    return (
        <SessionProvider>
            <div>
                <Header />
                <Container className="text-center" style={{marginTop: "90px"}}>
                    <Outlet />
                </Container>
            </div>
        </SessionProvider>
    )
}