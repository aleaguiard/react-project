import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

function NotFound() {
    return (
        <div>
            <h1>Not Found Page</h1>
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
            <br />
            <br />
            <Link to="/date">
                <Button>Go Date-Time</Button>
            </Link>
        </div>
    );
}

export default NotFound;
