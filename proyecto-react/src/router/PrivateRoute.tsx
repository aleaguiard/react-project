import { Navigate } from 'react-router-dom';
import { useContext, ReactNode } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import React from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { logged } = useContext(AuthContext);

    return logged ? (
        <React.Suspense fallback={<p>Loading...</p>}>{children}</React.Suspense>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
