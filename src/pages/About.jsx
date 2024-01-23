import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const About = () => {
    const { user } = useAuth();

    return (
        <>
            <div className="min-h-screen mb-4 p-4 bg-black">
                <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 grid grid-cols-1 sm:grid-cols-2 text-white mt-16">
                    <div className="mb-8 sm:mb-0">
                        <div>
                            <h2 className="text-xl">
                                Welcome:{" "}
                                <span className="font-semibold">
                                    {user ? `${user.userName}` : `To our website`}
                                </span>
                            </h2>
                            <h1 className="mt-2 text-5xl">Why Choose Us?</h1>
                        </div>
                        <div className="mt-8 text-md">
                            <p className="mt-4">
                                <span className="font-bold">Expertise: </span>
                                Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
                            </p>
                            <p className="mt-4">
                                <span className="font-bold">Customization: </span>
                                We understand that every business is unique. That&apos;s why we create solutions that are tailored to your specific needs and goals.
                            </p>
                            <p className="mt-4">
                                <span className="font-bold">Customer-Centric Approach:</span> We prioritize your satisfaction and provide top-notch support to address your IT concerns.
                            </p>
                            <p className="mt-4">
                                <span className="font-bold">Affordability:</span> We offer competitive pricing without compromising on the quality of our services.
                            </p>
                            <p className="mt-4">
                                <span className="font-bold">Reliability:</span> Count on us to be there when you need us. We&apos;re committed to ensuring your IT environment is reliable and available 24/7.
                            </p>
                        </div>
                        <NavLink to='/contact'>
                            <button type="button" className="mt-6 mx-4 px-2 py-2 border border-blue-500 dark:bg-blue-900 rounded-lg">Connect Now</button>
                        </NavLink>
                        <button type="button" className="mt-6 px-2 py-2 border border-blue-500 rounded-lg">Learn more</button>
                        <div></div>
                    </div>
                    <div className="hidden sm:block">
                        <img src="/img/q.png" alt="img" className="opacity-80 invert ml-20 mt-8 rounded-full h-full w-3/4 pr-10" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
