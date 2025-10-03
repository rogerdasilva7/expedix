import { Outlet } from "react-router"
import { Sidebar } from "../components/Sidebar"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
export function Layout(){

    return(
        <>
            <div className="flex h-screen">
                <Sidebar />
                <main className="p-4 overflow-y-auto flex-1 bg-[#020817]">
                    <Outlet />
                </main>
            </div>   
        </>
    )
}