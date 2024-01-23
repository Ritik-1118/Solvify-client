import ServiceCard from "../components/ServiceCard";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

const Service = () => {

    const { services } = useAuth();

    return <div className=" min-h-screen bg-gradient-to-l from-black via-black to-black sm:px-0 lg:px-32">
        <h1 className=" text-6xl text-white ml-10 py-10 text-center font-bold">Services</h1>
        <hr className=" mt-2 text-center sm:mx-8 lg:mx-32"/>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {services ? (
                services.map((currElement,index) =>{
                    const {price,description,provider,service} = currElement;
                    return (
                        <div className=" px-2 mx-8" key={index}><ServiceCard img={'/img/code2.png'} provider={provider} service={service} description={description} price={price} /></div>
                    );
                })
            ):(<>
                <div></div>
                <div className=" text-5xl text-white text-center item-center justify-center my-32 mx-128 ">Service not available.
                <p className=" text-white text-center text-xl mt-4">Login to see services <NavLink to='/login' className='text-blue-700 underline'>login</NavLink>.</p>
                </div>
            </>)}            
        </div>
    </div>
};
export default Service;