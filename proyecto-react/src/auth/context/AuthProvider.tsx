import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { AuthAction, AuthActionTypes } from '../types/types';
import { users } from '../../mocks/usersData';

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

    const login = (username: string, password: string) => {
        const user = users.users.find(
            (user) => user.nombre === username && user.password === password,
        );

        if (user) {
            const action: AuthAction = {
                type: AuthActionTypes.LOGIN,
                payload: {
                    id: user.id,
                    name: user.nombre,
                    password: user.password,
                },
            };
            localStorage.setItem('user', JSON.stringify(action.payload));
            dispatch(action);
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        const action: AuthAction = {
            type: AuthActionTypes.LOGOUT,
        };
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
