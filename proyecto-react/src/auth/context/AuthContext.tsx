import { createContext } from 'react';

interface AuthContextType {
    logged?: boolean;
    user?: { id: number; name: string; password: string };
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    logged: false,
    login: () => {},
    logout: () => {},
});
