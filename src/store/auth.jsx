import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");
    const [services,setServices] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    let isLoggedIn = !!token;
    // Storing token on loccal storage
    const storeDataInLS = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    }

    // Logout
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    }

    const userAuthorization = async () =>{
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/api/auth/user",{
            method:"GET",
            headers:{
                Authorization:authorizationToken,
            },
        });
        if(response.ok){
            const data = await response.json();
            setUser(data.userData);
            setIsLoading(false);
        }else{
            console.log("Error Fatching using data")
            setIsLoading(false);
        }
    }
    const getServices = async () =>{
        try {
            const response = await fetch("http://localhost:8000/api/data/service",{
                method:"GET",
            });
            if(response.ok){
                const data = await response.json();
                setServices(data.response);
            }
        } catch (error) {
            console.log(`Services error from fronted: ${error}`);
        }
        
    }

    useEffect(()=>{
        getServices();
        userAuthorization();
    },[])

    return <AuthContext.Provider value={{isLoggedIn,isLoading,storeDataInLS, LogoutUser, user,services,authorizationToken}}>
        {children}
    </AuthContext.Provider>
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used outside of the prvider.")
    }
    return AuthContextValue;
}