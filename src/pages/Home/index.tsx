import { IoAdd } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxPencil1 } from "react-icons/rx";
import { FaLocationArrow } from "react-icons/fa6";
import { ModalForm } from "../../components/ModalForm";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { ModalUpdate } from "../../components/ModalUpdate";
import { useContext } from "react";
import { UpdateContext } from "../../contexts/UpdateContext";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
export interface DataProps {
  name: string;
  id: string;
  telephone: string;
  city: string;
  date: string;
  time: string;
  dispatcher: string;
  observations: string;
}

export function Home(){
const { userName, getUserName } = useContext(AuthContext);
const { changeUpdateModal } = useContext(UpdateContext)
const [openModal, setOpenModal] = useState(false);
const [openModalUpdate, setOpenModalUpdate] = useState(false)
const [records, setRecords] = useState<DataProps[]>([]);
const [search, setSearch] = useState("");

useEffect(() => {
    async function loadReacords(){
        const unsub = onSnapshot(collection(db, "records"),(snapshot) => {
            let listRecords: DataProps[] = [];
            snapshot.forEach((doc) => {
                listRecords.push({
                    id: doc.id,
                    city: doc.data().city,
                    date: doc.data().date,
                    dispatcher: doc.data().dispatcher,
                    name: doc.data().name,
                    telephone: doc.data().telephone,
                    time: doc.data().time,
                    observations: doc.data().observations,
                })
            })
            setRecords(listRecords)
        })
    }
    loadReacords()
},[])

useEffect(() => {
    async function checkLogin(){
        onAuthStateChanged(auth, (user) => {
            if(user?.displayName){
                getUserName(user?.displayName)
            }
        })
    }
    checkLogin()
},[])


const filteredRecords = records.filter((item) => {
    const fullText = Object.values(item).join(" ").toLowerCase();
    const normalizedSearch = search.toLowerCase();
    return fullText.includes(normalizedSearch);
});
                            
function changeModal(){
    setOpenModal(true)
}

async function deleteRecord(id: string){
    const docRef = doc(db, "records", id)
    await deleteDoc(docRef)
    .then(() => {
        toast.success(
            <div>
                <h2 className="text-white font-bold text-sm">Registro Deletado</h2>
                <p className="text-gray-100/60 text-sm">O registro foi deletado com sucesso.</p>
            </div>
        )
    })
    .catch((error) => {
        alert(error)
    })
}

function openUpdateModal(register: DataProps){
    changeUpdateModal(register)
    setOpenModalUpdate(true)
}


    return(
        <div>
            <AnimatePresence>
                {openModal && (<ModalForm onClose={() => setOpenModal(false)}/>)}
            </AnimatePresence>
            <AnimatePresence>
                {openModalUpdate && (<ModalUpdate onCloseModal={() => setOpenModalUpdate(false)}/>)}
            </AnimatePresence>

            <main className="flex flex-col ml-8 mr-8">
                <section className="relative flex justify-between">
                    <input type="text" placeholder="Pesquisar registros" className="border border-solid border-gray-100/20 text-gray-100 text-sm p-3.5 rounded-3xl bg-[#020817] w-100 pl-17 focus:border-green-100/40 outline-none" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <FaLocationArrow className="text-[#6F5AF5] absolute text-2xl top-3.5 left-5"/>
                    <div>
                        <p className="text-white">{userName}</p>
                    </div>
                </section>
                <section className="w-full bg-[#020817] h-40 flex items-center justify-between border border-solid border-gray-100/20 rounded-lg mt-13">
                    <div className="ml-7.5">
                        <p className="text-white text-3xl">Adicionar Novo Registro</p>
                        <p className="text-gray-100/60 mt-2.5">Adicione um novo registro para controlar sua expedição.</p>
                    </div>
                    <button className="bg-[#6f5af5d7] duration-500 ease-in-out cursor-pointer p-2 rounded-full mr-7.5 border border-solid border-gray-100/20 text-white hover:bg-[#6F5AF5] hover:brightness-125" onClick={() => changeModal()}>
                        <IoAdd className="text-4xl"/>
                    </button>
                </section>
                <section className="mt-5 border border-solid border-gray-100/20 w-full rounded-lg bg-[#020817]">
                    <div className="ml-7.5 mt-5 mb-5">
                        <p className="text-white text-3xl">Resumo de Expedição</p>
                        <p className="text-gray-100/60 mt-2.5">Atualmente você possui {records.length} registros na sua tabela.</p>
                    </div>
                        <table className="w-full">
                            <thead className="">
                                <tr className="text-gray-100/40 text-sm">
                                    <th className="border-b border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">Nome</th>
                                    <th className="border-b border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">Telefone</th>
                                    <th className="border-b border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">Cidade</th>
                                    <th className="border-b border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">Data retirada</th>
                                    <th className="border-b border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">Hora retirada</th>
                                    <th className="border-b border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">Expedidor</th>
                                    <th className="border-b border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">Ações</th>
                                </tr>
                            </thead>
                            
                            <tbody className="text-gray-100 w-full text-sm">
                            {filteredRecords.map((register) => (
                                <tr className="border-b rounded-lg border-gray-100/20 text-left pt-3.5 pb-3.5 pl-7.5">
                                    <td className="p-7.5">{register.name}</td>
                                    <td className="p-7.5">{register.telephone}</td>
                                    <td className="p-7.5">{register.city}</td>
                                    <td className="p-7.5">{register.date}</td>
                                    <td className="p-7.5">{register.time}</td>
                                    <td className="p-7.5">{register.dispatcher}</td>
                                    <td className="flex gap-6 items-center p-7.5">
                                        <button className="cursor-pointer" onClick={() => openUpdateModal(register)}><RxPencil1/></button>
                                        <button className="cursor-pointer" onClick={() => deleteRecord(register.id)}><FaRegTrashAlt/></button>
                                    </td>
                                   
                                </tr>
                             ))}
                            </tbody>

                        </table>
                </section>
            </main>
        </div>
    )
}