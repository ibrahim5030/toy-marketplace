import { Link } from "react-router-dom";
import notFound from '../../assets/notfound.png';
import useTitle from "../../hooks/useTitle";


const NotFound = () => {
    useTitle('Not Found');
    return (
        <div>
            <div className="h-screen w-screen bg-gray-500 flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="max-w-md mb-5">
                        <div className="text-5xl text-white font-bold">404</div>
                        <p
                            className="text-2xl md:text-3xl font-light leading-normal text-white"
                        >Sorry we could not find this page. </p>
                        <p className="mb-8 text-white">But do not worry, you can find plenty of other things on our homepage.</p>

                        <Link to='/'>
                            <button className="btn btn-active">Back to home</button>
                        </Link>
                    </div>
                    <div className="max-w-lg">
                        <img src={notFound} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;