import { useLoaderData } from "react-router-dom";


const Details = () => {
    const carDetails = useLoaderData();
    const {seller_name, toy_name, price, available_quantity, picture_url, description, seller_email, rating} = carDetails;
    return (
        <div className="hero w-10/12 mx-auto bg-base-200 my-28 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture_url} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold mb-2">Toy Name: {toy_name}</h1>
                    <p className="py-1 text-2xl">Seller Name: {seller_name}</p>
                    <p className="py-1 text-2xl">Seller Email: {seller_email}</p>
                    <p className="py-1 text-2xl">Price: ${price}</p>
                    <p className="py-1 text-2xl">Available Quantity: {available_quantity}</p>
                    <p className="py-3 text-xl">Detail Description: {description}</p>
                    <button className="btn btn-primary">Rating: {rating} Stars</button>
                </div>
            </div>
        </div>
    );
};

export default Details;