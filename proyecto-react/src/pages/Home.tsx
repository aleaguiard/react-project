import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to={'/date'}>GO DATE</Link>
        </>
    );
}
export default Home;