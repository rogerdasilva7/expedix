import { Outlet } from "react-router"
import { Sidebar } from "../components/Sidebar"
export function Layout(){
    return(
        <>
            <div className="flex h-screen">
            <Sidebar />
            <main className="p-4 overflow-y-auto flex-1 bg-[#00030C]">
                <Outlet />
            </main>
            </div>
        </>
    )
}