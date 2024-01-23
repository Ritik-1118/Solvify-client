import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminUpdate = () => {
    const [data,setData] = useState({
        userName:"",
        email:"",
        phone:"",
    });
    const navigate = useNavigate();
    const params = useParams();
    const {authorizationToken} = useAuth();
    const getSingleUserData = async()=>{
        // console.log("id:- ",id,authorizationToken)
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            })
            const userData = await response.json();
            console.log(`User Single Data : ${userData}`);
            setData(userData);
            // if(response.ok){
            //     getAllUsersData();
            // }
        } catch (error) {
            console.log(error);
        }
    }
    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]:value,
        });
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken,
                },
                body:JSON.stringify(data),
            });
            console.log("Response: ",response);
            if(response.ok){
                navigate("/admin/users");
                toast.success("Updated successfully");
            }else{
                toast.error("Not Updated");
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getSingleUserData();
    },[])

    return <div>
        <div className=" ml-16 mt-16">
        <div className=" text-5xl text-blue-300 py-10 font-bold">Update User Data</div>
            <form className=" text-xl w-1/2" onSubmit={handleSubmit}>
                <label htmlFor="userName" className=" font-bold py-1">UserName</label><br />
                <input type="text" name="userName" className=" rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-1/2 border-gray-600 border-2"  value={data.userName} onChange={handleInput} required/><br />
                <label htmlFor="email" className="font-bold py-1">Email</label><br />
                <input type="email" name="email" className=" rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-1/2 border-gray-600 border-2" value={data.email} onChange={handleInput} required/><br />
                <label htmlFor="phone" className="font-bold py-1">Phone</label><br />
                <input id="phone" name="phone" rows="4" cols="50" className=" rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-1/2 border-gray-600 border-2" value={data.phone} onChange={handleInput} required/><br />
                <input type="submit" className=" mt-6  px-2 py-1 border border-blue-500 bg-gradient-to-r from-blue-900 to-blue-300 rounded-lg cursor-pointer" value="Update" />
            </form>
        </div>
    </div>
};
export default AdminUpdate;