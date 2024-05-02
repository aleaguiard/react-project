import Navigation from '../components/Navigation/Navigation';

console.log('NotFoundPage');

function NotFound() {
    return (
        <div>
            <h1>Not Found Page</h1>
            <Navigation currentPage="/notfound" />
        </div>
    );
}

export default NotFound;
