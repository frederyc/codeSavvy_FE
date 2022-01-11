import React, { createContext, useState } from 'react';

export const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(undefined)
    const [userType, setUserType] = useState(undefined)

    const state = {token, setToken, userType, setUserType};

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthProvider');
    }

    return context;
};

export { AuthProvider, useAuthContext };