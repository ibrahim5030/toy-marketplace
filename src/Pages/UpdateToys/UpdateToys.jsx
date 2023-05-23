import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const loadedToys = useLoaderData();

    const { _id, description, available_quantity, price, toy_name} = loadedToys;

    useTitle('Update a Toy');

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const price = parseFloat(form.price.value);        
        const available_quantity = parseInt(form.available_quantity.value);
        const description = form.description.value;        

        form.reset('');

        const toyUpdated = {price, available_quantity, description};
        console.log(toyUpdated);        

        fetch(`http://localhost:5000/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyUpdated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (        
        <div className="w-9/12 mx-auto my-16">
            <p className="text-5xl text-sky-800 text-center my-10">Update a Toy</p>
            
            {/* For Update Toy Section */}
            <p className="text-3xl text-sky-800 text-center my-10">{toy_name}</p>
            <form onSubmit={handleUpdateToy}>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Available quantity</span>
                            <input type="number" name="available_quantity" defaultValue={available_quantity} placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <label className="input-group">
                        <span>Detail description</span>
                        <input type="text" name="description" defaultValue={description} placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <input className="btn btn-active btn-secondary w-full my-10" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateToys;