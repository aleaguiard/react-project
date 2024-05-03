import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const init = () => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    return {
        logged: !!user,
        user: user,
    };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name: string) => {
        const user = { id: '1', name };
        const action = {
            type: types.login,
            payload: user,
        };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    };

    const logout = () => {
        const action = {
            type: types.logout,
        };
        localStorage.removeItem('user');
        dispatch(action);
    };

    return (
        <AuthContext.Provider
            value={{ ...authState, login: login, logout: logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
