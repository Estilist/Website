import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const { session } = useContext(SessionContext);

    if (!session) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;