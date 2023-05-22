import car from '../../assets/toycar.png';
import useTitle from '../../hooks/useTitle';
import windowCar from '../../assets/car.png';
import babyCar from '../../assets/babycar.png';
import pinkCar from '../../assets/pinkcar.jpg';
import purpleCar from '../../assets/purplecar.png';
import yellowCar from '../../assets/yellowcar.jpg';
import blueCar from '../../assets/bluecar.png';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            {/* For Banner Section */}
            <div className="bg-sky-800 mb-16" data-aos="zoom-in" data-aos-duration="3000">
                <div className="w-11/12 mx-auto md:flex md:justify-center md:items-center md:gap-16">
                    <div className="md:w-1/2">
                        <img className="py-16" src={car} alt="" />
                    </div>
                    <div className="md:w-1/2 pb-3">
                        <h3 className="text-5xl text-white font-bold leading-normal">We Have a Huge
                        <br /> 
                        Collection of Toy Cars
                        <br /> 
                        For Car Lover Kids</h3>
                    </div>
                </div>
            </div>
            {/* For Gallery Section */}
            <h3 className="text-5xl text-sky-800 font-bold text-center mb-10">See The Gallery</h3>
            <div className="w-10/12 mx-auto grid grid-cols-3 gap-6 mb-16">
                <div className='outline outline-offset-4 outline-4 outline-sky-500 rounded'>
                    <img src={windowCar} alt="" />
                </div>
                <div className='outline outline-offset-4 outline-4 outline-sky-500 rounded'>
                    <img src={babyCar} alt="" />
                </div>
                <div className='outline outline-offset-4 outline-4 outline-sky-500 rounded'>
                    <img src={pinkCar} alt="" />
                </div>
                <div className='outline outline-offset-4 outline-4 outline-sky-500 rounded'>
                    <img src={purpleCar} alt="" />
                </div>
                <div className='outline outline-offset-4 outline-4 outline-sky-500 rounded'>
                    <img src={yellowCar} alt="" />
                </div>
                <div className='outline outline-offset-4 outline-4 outline-sky-500 rounded'>
                    <img src={blueCar} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;