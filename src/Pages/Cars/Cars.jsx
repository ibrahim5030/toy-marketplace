import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Cars = ({ caar }) => {

    const { _id, picture_url, toy_name, price, rating } = caar;

    const { user } = useContext(AuthContext);

    const alert = () => {
        if (!user) {
            Swal.fire('You have to log in first to view details')
        }
    }
    return (
        <div className="mb-3">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-96" src={picture_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating} Stars</p>
                    <div className="card-actions">
                        <Link onClick={alert} to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;