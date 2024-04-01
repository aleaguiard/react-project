import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h1>Not Found Page</h1>
            <Link to={'/'}>GO HOME</Link> <br />
            <Link to={'/date'}>GO DATE</Link>
        </>
    );
}

export default NotFound;
