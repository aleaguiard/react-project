import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/date">GO DATE</Link>
            <br />
            <br />
            <button
                onClick={() => {
                    throw new Error('PRUEBA ERROR SENTRY');
                }}
            >
                Send Error to Sentry
            </button>
        </div>
    );
}

export default Home;
