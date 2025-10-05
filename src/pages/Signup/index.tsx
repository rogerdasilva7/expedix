import { Link } from "react-router"
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { auth } from "../../services/firebaseConnection";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

export function Signup(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [userName, setUserName] = useState("");

const navigate = useNavigate();

async function newUser() {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    await updateProfile(user, {
      displayName: userName,
    });

    toast.success(
      <div>
        <h2 className="text-white font-bold text-sm">Conta Criada</h2>
        <p className="text-gray-100/60 text-sm">A conta foi criada com sucesso.</p>
      </div>
    );

    navigate("/login");

  } catch (error: any) {
    if (error.code === "auth/weak-password") {
      alert("senha fraca!!")
    } else if (error.code === "auth/email-already-in-use") {
      alert("email já existe!!")
    } else {
      console.log("Erro inesperado:", error);
    }
  }
}
    return(
        <div>
            <main>
                <section className="w-screen flex flex-col items-center justify-center h-screen bg-[#020817]">
                    <div className="flex flex-col items-center mb-10">
                        <h1 className="text-white font-bold text-3xl mb-3.5">Criar Conta</h1>
                        <p className="text-gray-400 tracking-wide font-medium">Cadastre-se para começar a usar o Expedix</p>
                    </div>
                    <div className="w-full max-w-md overflow-hidden flex flex-col justify-center">
                        <div className="flex flex-col mb-5.5 relative">
                            <label className="text-white font-bold mb-2.5">Nome de usuário</label>
                            <MdOutlineEmail className="absolute text-2xl text-gray-400 top-10.5 left-3"/>
                            <input type="text" placeholder="nome@exemplo.com" className="text-gray-400 border-1 border-solid border-gray-100/20 rounded-md pt-2 pb-2 pl-12 focus:border-green-100/40 outline-none" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col mb-5.5 relative">
                            <label className="text-white font-bold mb-2.5">Email</label>
                            <FaRegUser className="absolute text-lg text-gray-400 top-11 left-3"/>
                            <input type="text" placeholder="nome@exemplo.com" className="text-gray-400 border-1 border-solid border-gray-100/20 rounded-md pt-2 pb-2 pl-12 focus:border-green-100/40 outline-none" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-white font-bold mb-2.5">Senha</label>
                            <TbLockPassword className="absolute text-2xl text-gray-400 top-10.5 left-3"/>
                            <input type="password" placeholder="Digite sua senha" className="text-gray-400 border-1 border-solid border-gray-100/20 rounded-md pt-2 pb-2 pl-12 focus:border-green-100/40 outline-none" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="w-full bg-[#6f5af59a] rounded-lg p-2 mt-4.5 cursor-pointer text-[#020817] hover:bg-[#6F5AF5] duration-700 ease-in-out" onClick={() => newUser()}>Criar Conta</button>
                            <Link to={"/login"} className="text-[#6F5AF5] mt-15">Já possuí uma conta? Faça login</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}