import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useTitle('Register');
    
    const handleRegister = event =>{
        event.preventDefault();
        setSuccess('');        

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        
        form.reset('');
        console.log(name, email, password, photoURL);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setSuccess('User has created successfully');
            updateUserData(result.user, name, photoURL);
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);            
        })

        setError('');
        

        const updateUserData = (user, name, photoURL) => {
            updateProfile(user, {
                displayName: name, photoURL: photoURL
            })
            .then(()=>{
                console.log('user profile updated')
            })
            .catch(error => {
                setError(error.message);
            })
        }
    }

    return (
        <div className='w-2/3 mx-auto my-28 py-10'>
            <h3 className='text-center text-3xl font-bold text-sky-500'>Register</h3>
            
            <form onSubmit={handleRegister}>
                <div className='text-left w-1/2 mx-auto text-sky-500'>
                    <label>Name</label>
                    <input className='block w-full mx-auto mb-5 pl-1 border-2 border-sky-500' type="text" name="name" id="" placeholder=' Your Name'/>
                    
                    <label>Email</label>
                    <input className='block w-full mx-auto mb-5 pl-1 border-2 border-sky-500' type="email" name="email" id="" placeholder=' Your Email' required />


                    <label>Password</label>
                    <input className='block w-full mx-auto mb-5 pl-1 border-2 border-sky-500' type="password" name="password" id="" placeholder=' Enter Password' required />

                    <label>Photo URL</label>
                    <input className='block w-full mx-auto mb-5 pl-1 border-2 border-sky-500' type="text" name="photoURL" id="" placeholder=' Enter Photo URL'/>
                </div>
                <p className='text-center text-pink-600 my-3'>{error}</p>
                <p className='text-center text-emerald-800 my-3'>{success}</p>
                <div className='text-center'>
                    <button className='w-1/2 mx-auto bg-sky-500 text-white py-2 font-bold' type="submit" name='submit'>Register</button>
                </div>                
            </form>
            
            <div className='text-center my-3 font-bold'>
            <p className='text-sky-500'>Already Have an Account? <Link className='text-pink-600' to="/login">Login</Link></p>
            </div>            
        </div>
    );
};

export default Register;