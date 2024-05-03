import { createContext } from 'react';

interface AuthContextType {
    logged?: boolean;
    user?: { id: string; name: string };
    login: (name: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    logged: false,
    login: () => {},
    logout: () => {},
});
