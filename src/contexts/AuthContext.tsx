import { createContext, useState, type ReactNode } from "react";

interface LoginProps{
    login: (data: {}) => void;
    logout: () => void;
    userLoginAuth: boolean;
    loginDetailAuth: {};
    getUserName: (user: string) => void;
    userName: string | null;
}

interface ChildrenProps{
    children: ReactNode
}

export const AuthContext = createContext({} as LoginProps);

const AuthProvider = ({ children }: ChildrenProps) => {
const [userLoginAuth, setUserLoginAuth] = useState(false);
const [loginDetailAuth, setLoginDetailAuth] = useState({});
const [userName, setUserName] = useState<string | null>(null)


const login = (userDetails: {}) => {
    setUserLoginAuth(true)
    setLoginDetailAuth(userDetails)
}

const logout = () => {
    setUserLoginAuth(false)
    setLoginDetailAuth({})
    
}

const getUserName = (user: string | null) => {
    setUserName(user)
}

    return(
        <AuthContext.Provider value={{ login, logout, userLoginAuth, loginDetailAuth, userName, getUserName}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }