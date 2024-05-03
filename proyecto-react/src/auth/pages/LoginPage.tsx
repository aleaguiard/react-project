import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

export const LoginPage = () => {
    const navigate = useNavigate();

    const onLogin = () => {
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
