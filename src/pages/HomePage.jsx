import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import InicioPage from "./InicioPage";
import IdeasPage from "./IdeasPage";

const HomePage = () => {
    const { session } = useContext(SessionContext);
    return (
        <div>
            {session ? <IdeasPage /> : <InicioPage />}
        </div>
    );
};

export default HomePage;