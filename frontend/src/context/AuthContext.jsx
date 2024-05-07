import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: '',
    });

    // Adding header for private route (default axios)
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = auth.token;
    }, [auth.token]);

    // Fetching user token from localstorage (already saved token in the local storage)
    useEffect(() => {
        const data = localStorage.getItem('token');
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook
const useAuthGlobally = () => {
    return useContext(AuthContext);
}

export { AuthProvider, AuthContext, useAuthGlobally };
