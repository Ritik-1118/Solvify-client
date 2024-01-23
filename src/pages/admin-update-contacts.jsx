import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminUpdateContact = () => {
    const [contact,setContact] = useState({
        userName:"",
        email:"",
        message:"",
    });

    const navigate = useNavigate();
    const params = useParams();
    const {authorizationToken} = useAuth();

    const getSingleContactData = async()=>{
        // console.log("id:- ",id,authorizationToken)
        try {
            const response = await fetch(`http://localhost:8000/api/admin/contacts/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            })
            const contactData = await response.json();
            console.log(`Contact Single Data : ${contactData}`);
            setContact(contactData);
            // if(response.ok){
            //     getAllContactData();
            // }
        } catch (error) {
            console.log(error);
        }
    }
    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setContact({
            ...contact,
            [name]:value,
        });
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/admin/contacts/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken,
                },
                body:JSON.stringify(contact),
            });
            console.log("Response: ",response);
            if(response.ok){
                navigate("/admin/contacts");
                toast.success("Updated successfully");
            }else{
                toast.error("Not Updated");
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getSingleContactData();
    },[])

    return <div>
        <div className=" ml-16 mt-16">
        <div className=" text-5xl text-blue-300 py-10 font-bold">Update Contact Data</div>
            <form className=" text-xl w-1/2" onSubmit={handleSubmit}>
                <label htmlFor="userName" className=" font-bold py-1">UserName</label><br />
                <input type="text" name="userName" className=" rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-1/2 border-gray-600 border-2"  value={contact.userName} onChange={handleInput} required/><br />
                <label htmlFor="email" className="font-bold py-1">Email</label><br />
                <input type="email" name="email" className=" rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-1/2 border-gray-600 border-2" value={contact.email} onChange={handleInput} required/><br />
                <label htmlFor="message" className="font-bold py-1">message</label><br />
                <input id="message" name="message" rows="4" cols="50" className=" rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-1/2 border-gray-600 border-2" value={contact.message} onChange={handleInput} required/><br />
                <input type="submit" className=" mt-6  px-2 py-1 border border-blue-500 bg-gradient-to-r from-blue-900 to-blue-300 rounded-lg cursor-pointer" value="Update" />
            </form>
        </div>
    </div>
};
export default AdminUpdateContact;