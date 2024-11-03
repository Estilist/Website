import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(() => {
        const storedSession = localStorage.getItem('user');
        return storedSession ? JSON.parse(storedSession) : null;
    });

    useEffect(() => {
        if (session) {
            localStorage.setItem("user", JSON.stringify(session));
        } else {
            localStorage.removeItem("user");
        }
    }, [session]);

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
};

SessionProvider.propTypes = {
    children: PropTypes.node
};

export default SessionProvider;