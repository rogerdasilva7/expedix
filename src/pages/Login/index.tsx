import { Link } from "react-router"
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

export function Login(){
const { login } = useContext(AuthContext);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const [userLoginDetail, setUserLoginDetail] = useState({});

async function loginUser(){
await signInWithEmailAndPassword(auth, email, password)
.then((value) => {
    toast.success(
    <div>
        <h2 className="text-white font-bold text-sm">Login Efetuado</h2>
        <p className="text-gray-100/60 text-sm">O login foi efetuado com sucesso.</p>
    </div>
    )
    setUserLoginDetail({
        uid: value.user.uid,
        email: value.user.email,
    })
    login(userLoginDetail)
    navigate("/")

})
.catch(() => {
    toast.error(
    <div>
        <h2 className="text-white font-bold text-sm">Erro no Login</h2>
        <p className="text-gray-100/60 text-sm">Ocorreu um erro nas credenciais ao tentar fazer login.</p>
    </div>
    )
})
}

    return(
        <div>
            <main>
                <section className="w-screen flex flex-col items-center justify-center h-screen bg-[#020817]">
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