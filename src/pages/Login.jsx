import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

const Login = () => {

    const navigate = useNavigate();
    const {storeDataInLS} = useAuth();

    const [user,setUser] = useState({
        email: "",
        password: "",
    });
    // Handling input
    const handleInput = (e) =>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };
    // Handling Submit
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/auth/login`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(user),
            });
            const res_data = await response.json();
            if(response.ok){
                toast.success("Login successful.")
                storeDataInLS(res_data.token);
                setUser({email:"",password:""});
                navigate("/");
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails :res_data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen pb-4 p-4  dark:bg-black border-orange-300">
            <div className=" my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="hidden md:block text-white text-center">
                    <img src="/img/go_for_it.png" alt="img" className="invert ml-16 mt-10 rounded-full h-full w-full mr-10"/>
                </div>
                <div className="hidden md:block ml-32 mt-32">
                    <img src="/img/right_arrow.gif" alt="arrow" className="w-1/2 rounded-full " />
                </div>
                <div className=" items-center justify-center text-white ">
                    <div className=" text-white  font-bold text-5xl my-12 ml-2">Login</div>
                    <form className=" text-xl" onSubmit={handleSubmit}>
                        <span className=" ">Email</span><br />
                        <input type="email" name="email" className=" w-4/5 h-10 rounded-lg bg-stone-500" value={user.email} onChange={handleInput} required/><br />
                        <span className=" ">Password</span><br />
                        <input type="password" name="password" className="w-4/5 h-10 rounded-lg bg-stone-500" value={user.password} onChange={handleInput} required/><br />
                        <button type="submit" className=" mt-6 px-2 py-1 border border-blue-500 dark:bg-blue-900 rounded-lg">signIn</button>
                    </form>
                    <br />
                    <p className=" text-md">Don&apos;t have an account? <span className="text-blue-500 cursor-pointer"><NavLink to="/register">Register</NavLink></span></p>
                </div>
            </div>
        </div>
    )
};
export default Login;