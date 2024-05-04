import { AuthState, AuthAction, AuthActionTypes } from '../types/types';

export const authReducer = (
    state: AuthState,
    action: AuthAction,
): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };

        case AuthActionTypes.LOGOUT:
            return {
                logged: false,
            };

        default:
            return state;
    }
};
