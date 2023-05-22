import car from '../../assets/toycar.png';
import useTitle from '../../hooks/useTitle';
import windowCar from '../../assets/car.png';
import babyCar from '../../assets/babycar.png';
import pinkCar from '../../assets/pinkcar.jpg';
import purpleCar from '../../assets/purplecar.png';
import yellowCar from '../../assets/yellowcar.jpg';
import blueCar from '../../assets/bluecar.png';
import { useLoaderData } from 'react-router-dom';
import Cars from '../Cars/Cars';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
    useTitle('Home');

    const cars = useLoaderData();

    const racing = cars.filter(c => c.sub_category === "Racing Car");

    const monster = cars.filter(c => c.sub_category === "Monster Car");

    const street = cars.filter(c => c.sub_category === "Street Car");

    const firstTabCars = racing.map(caar => <Cars key={caar._id} caar={caar}></Cars>);

    const secondTabCars = monster.map(caar => <Cars key={caar._id} caar={caar}></Cars>);

    const thirdTabCars = street.map(caar => <Cars key={caar._id} caar={caar}></Cars>);

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

            {/* For React Tabs Shop By Category Section */}

            <h3 className="text-5xl text-sky-800 font-bold text-center mb-10">Shop By Category</h3>
            <div className="w-10/12 mx-auto bg-sky-300 mb-28 rounded-lg">
                <div className="w-8/12 mx-auto py-5">
                    <Tabs>
                        <TabList>
                            <Tab>Racing Car</Tab>
                            <Tab>Monster Car</Tab>
                            <Tab>Street Car</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>{firstTabCars}</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>{secondTabCars}</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>{thirdTabCars}</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            {/* Custom Designed Toy Car Section */}
            <h3 className='text-5xl text-sky-800 font-bold text-center mb-10'>Order Custom Designed Toy Car</h3>
            <div className='w-10/12 mx-auto my-5'>
                <div className='md:flex items-center outline outline-offset-4 outline-4 outline-sky-500 rounded'>
                    <div>
                        <h3 className='text-2xl text-sky-800 font-bold p-8'>Now You Can Order Custom Designed Toy Cars. Just Send Us Your Design and We Will Make The Car For You.</h3>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/62276/pexels-photo-62276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;