import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {
        login('Alejandro');
        navigate('/', {
            replace: true,
        });
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <Button onClick={onLogin}>Login</Button>
        </div>
    );
};
