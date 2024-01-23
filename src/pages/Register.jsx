import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
    return (
        <div className="min-h-screen pb-4 p-4 dark:bg-black border-orange-300">
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Hidden on smaller screens */}
                <div className="hidden md:block text-white text-center">
                    <img src="/img/go_for_it.png" alt="img" className="invert ml-16 mt-10 rounded-full h-full w-full mr-10"/>
                </div>
                <div className="md:col-span-1 lg:col-span-1 hidden md:block"><img src="/img/right_arrow.gif" alt="arrow" className="w-1/2 rounded-full ml-2 mt-32 md:ml-32 lg:ml-0" /></div>
                <div className="md:col-span-1 lg:col-span-1 items-center justify-center text-white">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
};

export default Register;
