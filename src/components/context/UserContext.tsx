import { createContext, useState } from "react";

export type AuthUser = {
    name:string,
    email:string
}
type UserContextType = {
    user:AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderPropsType = {
    children:React.ReactNode
}
// export const UserContext = createContext<UserContextType |null>(null)
// Or We can use type assertion to remove checks (if) like below. With this
// we don't need to check whether context exists or not.
export const UserContext = createContext({} as UserContextType)
export const UserContextProvider = ({children}:UserContextProviderPropsType)=>{
    const [user,setUser] = useState<AuthUser|null>(null);
    return(
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        </>
    )

}