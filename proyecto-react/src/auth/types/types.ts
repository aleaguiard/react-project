export interface User {
    id: number;
    name: string;
    password: string;
}

export enum AuthActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface LoginAction {
    type: AuthActionTypes.LOGIN;
    payload: User;
}

export interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;

export interface AuthState {
    logged: boolean;
    user?: User;
}
