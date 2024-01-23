import { useState } from "react";
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

const RegistrationForm = () => {

    const navigate = useNavigate();
    const {storeDataInLS }= useAuth();
    const [user,setUser] = useState({
        userName: "",
        email: "",
        phone: "",
        password: "",
    });
    // Handling input
    const handleInput = (e) =>{
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
        console.log(user);
        try {
            const response = await fetch(`http://localhost:8000/api/auth/register`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            if(response.ok){
                toast.success("Registration successful.")
                storeDataInLS(res_data.token);
                navigate('/');
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails :res_data.message);
            }
            console.log(response);
        } catch (error) {
            console.log("Register",error);
        }
    }

    return <div className=" items-center justify-center">
        <div className=" text-white  font-bold text-5xl mb-12 ml-2">Register</div>
        <form className=" text-xl" onSubmit={handleSubmit}>
            <span className=" mb-4">UserName</span><br />
            <input type="text" name="userName" placeholder="Enter userName" className=" w-4/5 h-10 rounded-lg bg-stone-500" value={user.userName} onChange={handleInput} required/><br />
            <span className=" ">Email</span><br />
            <input type="email" name="email" className=" w-4/5 h-10 rounded-lg bg-stone-500" value={user.email} onChange={handleInput} required/><br />
            <span className=" ">Phone</span><br />
            <input type="number" name="phone" className="w-4/5 h-10 rounded-lg bg-stone-500" value={user.phone} onChange={handleInput} required/><br />
            <span className=" ">Password</span><br />
            <input type="password" name="password" className="w-4/5 h-10 rounded-lg bg-stone-500" value={user.password} onChange={handleInput} required/><br />
            <button type="submit" className=" mt-6 px-2 py-1 border border-blue-500 dark:bg-blue-900 rounded-lg">signUp</button>
        </form>
        <br />
        <p className=" text-md">Already have an account? <span className="text-blue-500 cursor-pointer"><NavLink to="/login">Login</NavLink></span></p>
    </div>;
};
export default RegistrationForm;