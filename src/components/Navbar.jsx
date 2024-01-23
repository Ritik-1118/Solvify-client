import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { BiSolidHome, BiSolidDetail } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineImportContacts } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { TbLogin } from "react-icons/tb";

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="w-full bg-white border-gray-200 px-4 sm:px-6 py-4 dark:bg-gray-800">
            <div className="max-w-7xl w-full mx-auto flex flex-wrap md:justify-between justify-between items-center">
                <NavLink to="/" className="flex md:ml-5 items-center">
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                        R
                    </span>
                </NavLink>
                <div className="flex">
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-cyan-700 rounded-lg md:hidden focus:outline-none dark:text-cyan-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox={`${isMobileMenuOpen ? "0 0 24 24" : "0 0 17 14"}`}
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={`${
                                    isMobileMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M1 1h15M1 7h15M1 13h15"
                                }`}
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto ${
                        isMobileMenuOpen ? "block" : "hidden"
                    }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 md:mr-9 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className="py-2 pr-4 pl-3 text-white md:p-0 dark:text-white flex"
                                aria-current="page"
                                onClick={closeMobileMenu}
                            >
                                <BiSolidHome className="text-center text-xl mx-2" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="flex py-2 pr-4 pl-3 text-white md:p-0 dark:text-white"
                                aria-current="page"
                                onClick={closeMobileMenu}
                            >
                                <BiSolidDetail className="text-center text-xl mx-2" />
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="flex py-2 pr-4 pl-3 text-white md:p-0 dark:text-white"
                                aria-current="page"
                                onClick={closeMobileMenu}
                            >
                                <RiContactsFill className="text-center text-xl mx-2" />
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/service"
                                className="flex py-2 pr-4 pl-3 text-white md:p-0 dark:text-white"
                                aria-current="page"
                                onClick={closeMobileMenu}
                            >
                                <MdOutlineImportContacts className="text-center text-xl mx-2" />
                                Services
                            </NavLink>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <NavLink
                                    to="/logout"
                                    className="flex py-2 pr-4 pl-3 text-white md:p-0 dark:text-white"
                                    onClick={closeMobileMenu}
                                >
                                    <IoMdLogOut className="text-center text-xl mx-2" />
                                    Logout
                                </NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className="flex py-2 pr-4 pl-3 text-white md:p-0 dark:text-white"
                                        onClick={closeMobileMenu}
                                    >
                                        <TbLogin className="text-center text-xl mx-2" />
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/register"
                                        className="flex py-2 pr-4 pl-3 text-white md:p-0 dark:text-white"
                                        onClick={closeMobileMenu}
                                    >
                                        <TbLogin className="text-center text-xl mx-2" />
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
