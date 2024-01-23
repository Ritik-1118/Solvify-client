import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Contact = () => {
    const [contact, setContact] = useState({
        userName: "",
        email: "",
        message: "",
    });
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();

    if (userData && user) {
        setContact({
            userName: user.userName,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    // Handling input
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    // Handling Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                toast.success("Message Sent.");
            }
        } catch (error) {
            toast.error("Message not sent.");
            console.log("Message", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-l from-black via-black to-black px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="text-5xl text-yellow-300 pt-16 pl-4 sm:pl-10">Contact Us</div>
            <div className="text-white grid grid-cols-1 sm:grid-cols-2 mt-4 pb-16">
                <div className="mb-4 sm:mb-0">
                    <img src="/img/giphy.gif" alt="img" className="invert opacity-80 rounded-full h-full w-3/4 mx-auto sm:ml-0" />
                </div>
                <div className="ml-0 sm:ml-16 mt-4 sm:mt-16">
                    <form className="text-xl" onSubmit={handleSubmit}>
                        <label className="font-bold py-1">UserName</label><br />
                        <input type="text" name="userName" className="rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-full sm:w-3/4 border-gray-600 border-2" value={contact.userName} onChange={handleInput} required /><br />
                        <label className="font-bold py-1">Email</label><br />
                        <input type="email" name="email" className="rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-full sm:w-3/4 border-gray-600 border-2" value={contact.email} onChange={handleInput} required /><br />
                        <label className="font-bold py-1">Message</label><br />
                        <textarea id="message" name="message" rows="4" cols="50" className="rounded-lg py-2 bg-gradient-to-r from-gray-800 to-gray-400 w-full sm:w-3/4 border-gray-600 border-2" value={contact.message} onChange={handleInput} required /><br />
                        <input type="submit" className="mt-6 px-2 py-1 border border-blue-500 bg-gradient-to-r from-yellow-900 to-amber-300 rounded-lg cursor-pointer w-full sm:w-auto" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
