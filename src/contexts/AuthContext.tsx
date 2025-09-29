import { createContext, useState, type ReactNode } from "react";

interface LoginProps{
    login: (data: {}) => void;
    logout: () => void;
    
    userLoginAuth: boolean;
    loginDetailAuth: {};
}

interface ChildrenProps{
    children: ReactNode
}

export const AuthContext = createContext({} as LoginProps);

const AuthProvider = ({ children }: ChildrenProps) => {
const [userLoginAuth, setUserLoginAuth] = useState(false);
const [loginDetailAuth, setLoginDetailAuth] = useState({});

const login = (userDetails: {}) => {
    setUserLoginAuth(true)
    setLoginDetailAuth(userDetails)
}

const logout = () => {
    setUserLoginAuth(false)
    setLoginDetailAuth({})
    
}

    return(
        <AuthContext.Provider value={{ login, logout, userLoginAuth, loginDetailAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }