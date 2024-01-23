
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Service from "./pages/Service";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Demo from "./pages/demo";
import { Error404 } from "./pages/404";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/admin-users";
import AdminContacts from "./pages/admin-contacts";
import AdminUpdate from "./pages/admin-update";
import AdminUpdateContact from "./pages/admin-update-contacts";
import AdminHome from "./pages/admin-home";

const App = () =>{
    return(<>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/service" element={<Service />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/demo" element={<Demo />}/>
                    <Route path="*" element={<Error404 />} />

                    <Route path="/admin" element={<AdminLayout />} >
                        <Route path="home" element={<AdminHome />} />
                        <Route path="users" element={<AdminUsers />} />
                        <Route path="users/:id/edit" element={<AdminUpdate />} />
                        <Route path="contacts" element={<AdminContacts />}/>
                        <Route path="contacts/:id/edit" element={<AdminUpdateContact />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
export default App
