import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyToysRow = ({ toy, myAddedToys, setMyAddedToys }) => {
    const { _id, seller_email, description, seller_name, toy_name, picture_url, sub_category, price, available_quantity, rating } = toy;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {



                fetch(`http://localhost:5000/cars/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = myAddedToys.filter(to => to._id !== _id);
                            setMyAddedToys(remaining);
                        }
                    })
            }
        })
    }

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
            <td><Link to={`/updatetoys/${_id}`}><button className="btn btn-active btn-secondary">Update</button></Link></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-active btn-secondary">Delete</button></td>
        </tr>
    );
};

export default MyToysRow;