import { Link } from "react-router"
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router";

export function Login(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [login, setLogin] = useState(false)
const navigate = useNavigate();


async function loginUser(){
await signInWithEmailAndPassword(auth, email, password)
.then((value) => {
    alert("logado com sucesso");
    navigate("/");

})
.catch(() => {
    alert("erro ao fazer login")
})
}

useEffect(() => {
    async function checkLogin(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                //tem usuario logado
            }
            setLogin(false)
        })
    }
    checkLogin()
},[])
    return(
        <div>
            <main>
                <section className="w-screen flex flex-col items-center justify-center h-screen bg-[#00030C]">
                    <div className="flex flex-col items-center">
                        <h1 className="text-white font-bold text-3xl mb-3.5">Bem vindo a Expedix</h1>
                        <p className="text-gray-400 tracking-wide font-medium">Por favor, faça login para continuar</p>
                    </div>
                    <div className="w-lg">
                        <div className="flex flex-col mb-5.5 relative">
                            <label className="text-white font-bold mb-2.5">Email</label>
                            <MdOutlineEmail className="absolute text-2xl text-gray-400 top-10.5 left-3"/>
                            <input type="text" placeholder="nome@exemplo.com" className="text-gray-400 border-1 border-solid border-gray-100/20 rounded-md pt-2 pb-2 pl-12" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-white font-bold mb-2.5">Senha</label>
                            <TbLockPassword className="absolute text-2xl text-gray-400 top-10.5 left-3"/>
                            <input type="password" placeholder="Digite sua senha" className="text-gray-400 border-1 border-solid border-gray-100/20 rounded-md pt-2 pb-2 pl-12" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="w-full bg-[#6f5af59a] rounded-lg p-2 mt-4.5 cursor-pointer text-[#020817] hover:bg-[#6F5AF5] duration-700 ease-in-out" onClick={() => loginUser()}>Entrar</button>
                            <Link to={"/signup"} className="text-[#6F5AF5] mt-15">Não tem uma conta? Cadastre-se</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}