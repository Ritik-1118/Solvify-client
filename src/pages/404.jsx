import { NavLink } from "react-router-dom";

export const Error404 = () => {
    return <>
        <div className="min-h-screen bg-gradient-to-l from-black via-gray-900 to-gray-800 px-32">
            <div className=" text-white text-center pt-48">
                <h1 className=" text-9xl">404</h1>
                <div className=" text-xl">Page not found.</div>
                <div className=" mt-8 text-lg">
                    <p>Oops! It seems like the page you&rsquo;re trying to access doesn&rsquo;t exist.</p>
                    <p>If you believe there&rsquo;s an issue, feel free to report it, and we&rsquo;ll look into it.</p>
                </div>
                <div className=" mt-8">
                    <NavLink to='/' className="mt-6 px-2 py-2 mx-4 border border-blue-500 dark:bg-blue-700 rounded-lg">Return Home</NavLink>
                    <NavLink to='/contact' className="mt-6 px-2 py-2 border border-blue-500 rounded-lg">Report problem</NavLink>
                </div>
            </div>
        </div>
    </>;
};