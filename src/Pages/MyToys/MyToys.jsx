import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {

    useTitle('My Toys');

    const allCarsToys = useLoaderData();


    const { user } = useContext(AuthContext);

    const myCarToys = allCarsToys.filter(t => t.seller_email === user.email)

    const [myAddedToys, setMyAddedToys] = useState(myCarToys);

    return (
        <div className="my-10">
            <p className="text-5xl text-sky-800 text-center mb-10">See My Toys</p>

            {/* For Added Toys Section */}
            <div className="w-11/12 mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Seller Email </th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAddedToys.map(toy => <MyToysRow key={toy._id}
                                    toy={toy}
                                    myAddedToys={myAddedToys}
                                    setMyAddedToys={setMyAddedToys}
                                ></MyToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;