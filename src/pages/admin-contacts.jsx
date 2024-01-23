import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const {authorizationToken} = useAuth();

    const deleteContact = async(id)=>{
        try {
            const response = await fetch(`http://localhost:8000/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                },
            })
            const data = await response.json();
            console.log(`Contact After Delete : ${data}`);
            if(response.ok){
                getAllContactsData();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getAllContactsData = async ()=>{
        const response = await fetch("http://localhost:8000/api/admin/contacts",{
            method:"GET",
            headers:{
                Authorization:authorizationToken,
            },
        })
        const data = await response.json();
        setContacts(data);
        console.log("Contacts are:- ",contacts);
    }

    useEffect(()=>{
        getAllContactsData();
    },[])

    return <div className="text-white dark:bg-gray-900 min-h-screen">
        <div className=" text-5xl text-center font-bold py-10 bg-black min-w-full  border-gray-600 rounded-xl">
            Admin Contacts panel
        </div>
        <div className=" ">
            <table className="table-auto min-w-full">
                <thead>
                    <tr className="border-b-8 border-gray-600 bg-gray-950">
                        <td className=" px-4 py-6 font-bold text-2xl">UserName</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Email</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Message</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Update</td>
                        <td className=" px-4 py-6 font-bold text-2xl">Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((curr,index)=>{
                        return (
                            <tr key={index} className="border-b-8 border-gray-600">
                                <td key={index} className=" px-4 py-4">{curr.userName}</td>
                                <td key={index} className=" px-4 py-4">{curr.email}</td>
                                <td key={index} className=" px-4 py-4">{curr.message}</td>
                                <td key={index} className=" px-4 py-4"><Link to={`/admin/contacts/${curr._id}/edit`}>Edit</Link></td>
                                <td key={index} className=" px-4 py-4"><button onClick={()=>{deleteContact(curr._id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
};
export default AdminContacts;