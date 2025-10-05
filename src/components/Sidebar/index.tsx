import logo from "../../assets/logo-box-expedix.png"
import { LuUsersRound } from "react-icons/lu";
import { Link } from "react-router";
import { VscSignOut } from "react-icons/vsc";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { PiSidebarDuotone } from "react-icons/pi";

export function Sidebar(){
const { logout} = useContext(AuthContext);
const navigate = useNavigate();
const [isCollapsed, setIsCollapsed] = useState(false);
const [isHovered, setIsHovered] = useState(false);

async function logoutUser(){
    await signOut(auth);
    logout()
    navigate("/login")
}

function sidebarCollapsed(){
    setIsCollapsed(true)
}
    return(
        <div>
            <main className={`${!isCollapsed ? "w-64" : "w-20"} h-screen bg-[#020817] flex flex-col border-solid border-r-1 border-gray-100/20 transition-all duration-700`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <nav className="text-white pr-5 pl-5 flex flex-col h-screen justify-between">
                    <div>
                        <div className="flex items-center ml-2 mt-5 relative">
                            {isHovered ? <button onClick={() => setIsCollapsed(false)}><div className="hover:text-[#6F5AF5] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer"><PiSidebarDuotone className="absolute right-0.5 text-2xl top-2"/></div></button> : <img src={logo} alt="Expedix logo" className="h-8 w-8"/>}
                            {!isCollapsed && <h1 className="text-2xl font-bold ml-2.5">Expedix</h1>}
                            <button className="cursor-pointer" onClick={() => sidebarCollapsed()}>
                                <div className="hover:text-[#6F5AF5] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer">
                                    {!isCollapsed && <PiSidebarDuotone className="absolute right-0.5 text-lg top-2"/>}
                                </div>
                            </button>
                        </div>
                        <Link to={"/"} className="relative">
                            <div className="hover:text-[#6F5AF5] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out mt-7 pt-2.5 pb-2.5 pl-2">
                                <LuUsersRound className="absolute top-3 left-4 text-lg"/>
                                <p className={`font-medium pl-12 ${isCollapsed ? "hidden" : "block"}`}>Registros</p>
                            </div>
                        </Link>
                    </div>
                    <button onClick={() => logoutUser()}>
                        <div className="flex gap-5 mb-8 hover:text-[#6F5AF5] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer pt-2.5 pb-2.5 pl-2 items-center">
                            <p className="font-white text-lg"><VscSignOut /></p>
                            {!isCollapsed && <p>Sair</p>}
                        </div>
                    </button>
                </nav>
            </main>
        </div>
    )
}