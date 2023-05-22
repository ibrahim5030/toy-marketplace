import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../assets/Color logo.png';

const Footer = () => {
    return (
        <div className='bg-sky-800'>
            <div className='md:grid md:grid-cols-4 md:gap-3 w-10/12 mx-auto py-10'>
                <div className='text-white my-10 mb-3 col-span-2'>
                    <div className='flex items-center gap-3'>
                        <img className='w-16' src={logo} alt="" />
                        <h3 className='text-3xl font-bold mb-3'>Car Shop</h3>
                    </div>
                    <p className='text-xl font-bold my-5'>Connect with us on social media.</p>
                    <div className='flex gap-10'>
                        <p><Link to='https://www.facebook.com' target="_blank"><button><FaFacebookF></FaFacebookF></button></Link></p>
                        <p><Link to='https://www.instagram.com' target="_blank"><button><FaInstagram></FaInstagram></button></Link></p>
                        <p><Link to='https://twitter.com' target="_blank"><button><FaTwitter></FaTwitter></button></Link></p>
                    </div>
                </div>
                <div className='text-white my-10'>
                    <h3 className='text-xl font-bold mb-3'>Other Pages</h3>
                    <p><Link to='#'>About Us</Link></p>
                    <p><Link to='#'>Our Collections</Link></p>
                    <p><Link to='#'>Mobile App</Link></p>
                    <p><Link to='#'>New Cars</Link></p>
                </div>
                <div className='text-white my-10'>
                    <h3 className='text-xl font-bold mb-3'>Contact</h3>
                    <p className='mb-3'>350 Tupper Rd, Spencer, New York 14883, USA.</p>
                    <p className='underline underline-offset-8 mb-3'>Phone: (585) 346-7103</p>
                    <p>Email: carshop@carshop.com</p>
                </div>
            </div>
            <p className='text-center text-white py-5'>©Copyright protected website</p>
        </div>
    );
};

export default Footer;