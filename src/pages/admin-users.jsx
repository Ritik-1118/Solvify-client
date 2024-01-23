import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from "react-router-dom"

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    const {authorizationToken} = useAuth();

    const getAllUsersData = async() =>{
        const response = await fetch("http://localhost:8000/api/admin/users",{
            method:"GET",
            headers:{
                Authorization:authorizationToken,
            },
        })
        const data = await response.json();
        setUsers(data);
        console.log("users are:- ",users);
    }
    const deleteUser = async(id) =>{
        // console.log("id:- ",id,authorizationToken)
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                },
            })
            const data = await response.json();
            console.log(`User After Delete : ${data}`);
            if(response.ok){
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllUsersData();
    },[])

    return <div className="text-white dark:bg-gray-900 min-h-screen">
        <div className=" text-5xl text-center font-bold py-10 bg-black min-w-full  border-gray-600 rounded-xl">
            Admin user panel
        </div>
        <div className=" ">
            <table className="table-auto min-w-full">
                <thead>
                    <tr className="border-b-8 border-gray-600 bg-gray-950">
                        <td className=" px-4 py-6 font-bold text-2xl">Name</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Email</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Phone</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Update</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((curr,index)=>{
                        return (
                            <tr key={index} className="border-b-8 border-gray-600">
                                <td key={index} className=" px-4 py-4">{curr.userName}</td>
                                <td key={index} className=" px-4 py-4">{curr.email}</td>
                                <td key={index} className=" px-4 py-4">{curr.phone}</td>
                                <td key={index} className=" px-4 py-4"><Link to={`/admin/users/${curr._id}/edit`}>Edit</Link></td>
                                <td key={index} className=" px-4 py-4"><button onClick={()=>{deleteUser(curr._id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>;
};
export default AdminUsers;