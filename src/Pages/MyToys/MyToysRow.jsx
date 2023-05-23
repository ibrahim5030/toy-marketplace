import { Link } from "react-router-dom";



const MyToysRow = ({ toy }) => {
    const { _id, seller_email, description, seller_name, toy_name, picture_url, sub_category, price, available_quantity, rating } = toy;

    return (
        <tr>
            <th><img src={picture_url} alt="" /></th>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{seller_email}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{rating} Stars</td>
            <td className="text-center">{available_quantity}</td>
            <td className="text-center"><div className="w-28 overflow-hidden">{description}</div></td>
            <td><Link to=""><button className="btn btn-active btn-secondary">Update</button></Link></td>
            <td><button className="btn btn-active btn-secondary">Delete</button></td>
        </tr>
    );
};

export default MyToysRow;