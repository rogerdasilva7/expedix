import { Link } from "react-router";
export function NotFound(){
    return(
        <div>
            <div className="max-w-screen min-h-screen bg-[#020817] flex justify-center">
                <div className="mt-90 flex flex-col items-center max-w-lg w-full">
                    <h1 className="text-gray-100/90 text-7xl mb-2">404</h1>
                    <h2 className="text-gray-100/90 text-4xl mb-5">Ops, essa página não existe!</h2>
                    <Link to={"/login"} className="w-full">
                        <button className="w-full bg-[#6f5af59a] rounded-lg p-2 mt-4.5 cursor-pointer text-[#020817] hover:bg-[#6F5AF5] duration-700 ease-in-out">Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}