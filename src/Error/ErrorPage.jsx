import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-28 lg:mt-44'>
            <h1 className='text-5xl font-bold'>404! </h1>
            <h1 className='text-5xl font-bold'>Page not found.</h1>
            <Link to='/'>
                <button className='btn btn-primary'>Go to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;