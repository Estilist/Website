import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const SessionContext = createContext();

export const useSession = () => {
    return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(() => {
        const storedSession = localStorage.getItem('session');
        return storedSession ? JSON.parse(storedSession) : null;
    });

    useEffect(() => {
        if (session) {
            localStorage.setItem("session", JSON.stringify(session));
        } else {
            localStorage.removeItem("session");
        }
    }, [session]);

    const logout = () => {
        setSession(null);
    };

    return (
        <SessionContext.Provider value={{ session, setSession, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

SessionProvider.propTypes = {
    children: PropTypes.node
};

export default SessionProvider;