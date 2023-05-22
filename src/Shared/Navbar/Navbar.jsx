import { Link } from 'react-router-dom';
import logo from '../../assets/Color logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const tabs = <>
        <li className='md:text-white font-bold'><Link to='/'>Home</Link></li>
        <li className='md:text-white font-bold'><Link to='/alltoys'>All Toys</Link></li>
        <li className='md:text-white font-bold'><Link to='/blog'>Blogs</Link></li>
        <li className='md:text-white font-bold'><Link to='/mytoys'>My Toys</Link></li>
        <li className='md:text-white font-bold'><Link to='/addatoy'>Add A Toy</Link></li>
    </>


    return (
        <div>
            <div className='bg-sky-300'>
                <div className="navbar md:w-10/12 md:mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {tabs}
                            </ul>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img className='w-24 md:pr-3' src={logo} alt="" />
                            </div>
                            <div>
                                <h3 className="text-3xl text-white font-bold">Car Shop</h3>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {tabs}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ?
                            <><div>
                                <img data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user.displayName}
                                    data-tooltip-place="bottom" className='w-16 pr-3' src={user.photoURL} alt="" />
                                <Tooltip id="my-tooltip"></Tooltip>
                            </div>

                                <Link onClick={handleLogOut}><button className="btn btn-active btn-secondary">Logout</button></Link></> :
                            <Link to='/login'><button className="btn btn-active btn-secondary">Login</button></Link>}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;