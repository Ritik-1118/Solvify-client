import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="min-h-screen pb-16 p-4 bg-gradient-to-r from-gray-950 via-black to-cyan-950">
                <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 text-white grid grid-cols-1 sm:grid-cols-2 mt-10">
                    <div className="mb-4 sm:mb-0">
                        <div className="mt-16">
                            <h2 className="text-md">This is the world&rsquo;s best MERN project</h2><br />
                            <h1 className="text-6xl pb-2"> Welcome to project <br /> Solvify</h1>
                        </div>
                        <div className="my-4 text-sm">Explore my MERN project, uniting Node.js, Express.js, React.js, and Tailwind CSS for a seamless full-stack experience. It boasts secure user authentication with JWT, responsive design for various devices, and an admin panel for efficient management. This project exemplifies my ability to deliver modern, user-friendly web applications, blending backend and frontend technologies seamlessly.</div>
                        <NavLink to='/contact'><button type="button" className="mt-6 mx-4 px-2 py-2 border border-blue-500 dark:bg-blue-900 rounded-lg">Connect Now</button></NavLink>
                        <button type="button" className="mt-6 px-2 py-2 border border-blue-500 rounded-lg">Learn more</button>
                    </div>
                    <div className="hidden sm:block">
                        <img src="/img/coder1.png" alt="img" className="opacity-30 ml-16 mt-10 rounded-full h-full w-full mr-10" />
                    </div>
                </div>

                {/* Analytics */}
                <div className="text-black mx-4 sm:mx-8 md:mx-16 lg:mx-32 dark:bg-slate-300 mt-8 sm:mt-16 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-4 py-8 text-center font-bold">
                        <div className="text-3xl sm:border-t-2 border-r-0 sm:border-r-2 border-b-2 border-l-0 sm:border-l-2">50+<br /><span className="font-normal text-lg">Registered Companies</span></div>
                        <div className="text-3xl sm:border-t-2 sm:border-r-2 border-b-2 border-l-0 sm:border-l-2">100,00+<br /><span className="font-normal text-lg">Happy Clients</span></div>
                        <div className="text-3xl sm:border-t-2 sm:border-r-2 border-b-2 border-l-0 sm:border-l-2">500+<br /><span className="font-normal text-lg">Well Known Developers</span></div>
                        <div className="text-3xl sm:border-t-2 sm:border-b-2 border-r-0 border-l-0">24/7<br /><span className="font-normal text-lg">Service</span></div>
                    </div>
                </div>

                <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 text-white grid grid-cols-1 sm:grid-cols-2 mt-8">
                    <div className="sm:block">
                        <img src="/img/c2.png" alt="img" className="opacity-50 ml-16 mt-10 rounded-l-full h-full w-3/4 pr-10" />
                    </div>
                    <div className="">
                        <div className="mt-24">
                            <h2 className="text-md">We are here to help you.</h2><br />
                            <h1 className="text-5xl">Get Started Today</h1>
                        </div>
                        <div className="my-4 text-lg">
                            &ldquo;Start today! It&rsquo;s like an exciting invitation to begin something important right now. Take a small step, be determined, and go for your goals. Don&rsquo;t wait — your journey begins today!&ldquo;
                        </div>
                        <NavLink to='/contact'><button type="button" className="mt-6 mx-4 px-2 py-2 border border-blue-500 dark:bg-blue-900 rounded-lg">Connect Now</button></NavLink>
                        <button type="button" className="mt-6 px-2 py-2 border border-blue-500 rounded-lg">Learn more</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
