import {NavLink, Outlet} from "react-router-dom"
import AdminHome from "../../pages/admin-home";
import AdminUsers from "../../pages/admin-users";
import AdminContacts from "../../pages/admin-contacts";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
    const navigate = useNavigate();
    const {user, isLoading} = useAuth();

    if(isLoading){
        console.log("IsLoading......",isLoading);
        return <h1 className="text-white text-5xl text-center">Loading....</h1>
    }
    if(!user.isAdmin){

        return navigate('/');
    }
    return <>
        <div className="text-white text-xl dark:bg-black min-h-screen">
            <div className=" grid grid-cols-5">
                {/*left*/}
                <div className="min-h-screen border-r-8 border-gray-600">
                    <div className="py-10 px-16 min-w-full border-b-4 border-gray-600 rounded-xl">
                        <NavLink className=' '>
                            <FaUser className="text-9xl"/><br />
                        </NavLink>
                    </div>
                    <div className=" mx-16 pt-4 pb-4 text-blue-500">
                        <NavLink to='/admin/home' element={<AdminHome /> } className='mx-2 my-8 flex'><FaHome className="mx-2"/>Home</NavLink>
                        <NavLink to='/admin/users' element={<AdminUsers /> } className='mx-2 my-8 flex text-center'><FaUser className=" mx-2"/>users</NavLink>
                        <NavLink to='/admin/contacts' element={<AdminContacts /> } className='mx-2 my-8 flex'><RiMessage3Fill className="mx-2"/>contacts</NavLink>
                        <NavLink to='/admin/services'  className='mx-2 my-8 flex'><FaRegListAlt className="mx-2"/>services</NavLink>
                    </div>
                </div>
                {/*Right*/}
                <div className="col-span-4"><Outlet /></div>
            </div>
            
            
        </div>        
    </>;
    
};
export default AdminLayout;