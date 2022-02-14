import {useContext} from "react";
import { UserContext } from "./UserContext";
export const User=()=>{
    const context = useContext(UserContext)
    const handleLogin=()=>{
            console.log('Context',context);
            context.setUser({name:'Rizwan',email:'abc@gmail.com'})
    }
    const handleLogout=()=>{
        context.setUser(null)
    }

    return(
        <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>
            User Name is: {context.user?.name}
        </div>
        <div>
            User Email is: {context.user?.email}
        </div>
        </>
    )

}