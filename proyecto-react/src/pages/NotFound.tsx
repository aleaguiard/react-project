import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>Not Found Page</h1>
            <Link to="/">GO HOME</Link>
            <br />
            <Link to="/date">GO DATE-TIME</Link>
        </div>
    );
}

export default NotFound;
