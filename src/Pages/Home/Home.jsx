import car from '../../assets/toycar.png';

const Home = () => {
    return (
        <div>
            {/* For Banner Section */}
            <div className="bg-sky-800 mb-16">
                <div className="w-11/12 mx-auto md:flex md:justify-center md:items-center md:gap-16">
                    <div className="md:w-1/2">
                        <img className="my-16" src={car} alt="" />
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
        </div>
    );
};

export default Home;