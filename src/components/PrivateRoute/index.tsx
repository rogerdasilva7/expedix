import { Navigate, Outlet } from "react-router" 
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
export function PrivateRoute(){
const { userLoginAuth, loading } = useContext(AuthContext);
if(loading){
    return null
}
return userLoginAuth ? <Outlet/> : <Navigate to="/login"/>;
}