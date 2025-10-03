import logo from "../../assets/logo-box-expedix.png"
import { LuUsersRound } from "react-icons/lu";
import { Link } from "react-router";
import { VscSignOut } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

export function Sidebar(){
const { logout} = useContext(AuthContext);
const navigate = useNavigate();

async function logoutUser(){
    await signOut(auth);
    logout()
    navigate("/login")
}
    return(
        <div>
            <main className="h-screen w-65 bg-[#020817] flex flex-col border-solid border-r-1 border-gray-100/20">
                <nav className="text-white pr-5 pl-5 flex flex-col h-screen justify-between">
                    <div>
                        <div className="flex items-center justify-center mt-5">
                            <img src={logo} alt="Expedix logo" className="h-8 w-8"/>
                            <h1 className="text-2xl font-bold">Expedix</h1>
                        </div>
                        <Link to={"/"} className="relative">
                            <div className="hover:text-[#6F5AF5] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out mt-7 pt-2.5 pb-2.5 pl-2">
                                <LuUsersRound className="absolute top-3 left-4 text-lg"/>
                                <p className="font-medium pl-12">Registros</p>
                            </div>
                        </Link>
                    </div>
                    <button onClick={() => logoutUser()}>
                        <div className="flex gap-5 mb-8 hover:text-[#6F5AF5] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer pt-2.5 pb-2.5 pl-2 items-center">
                            <p className="font-white text-lg"><VscSignOut /></p>
                            <p>Sair</p>
                        </div>
                    </button>
                </nav>
            </main>
        </div>
    )
}