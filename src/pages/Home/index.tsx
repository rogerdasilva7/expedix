import { IoMdSearch } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxPencil1 } from "react-icons/rx";
import { FaLocationArrow } from "react-icons/fa6";
import { ModalForm } from "../../components/ModalForm";

export function Home(){
    return(
        <div>
            <ModalForm/>
            <main className="flex flex-col ml-8 mr-8">
                <section className="relative flex justify-between">
                    <input type="text" placeholder="Pesquisar registros" className="border border-solid border-gray-100/20 text-gray-100 text-sm p-3.5 rounded-3xl bg-[#020817] w-100 pl-17 focus:border-green-100/40 outline-none"/>
                        <div className="inline-flex items-center justify-center p-5.5 border border-gray-100/20 rounded-full ml-4 absolute mt-1 left-100 bg-[#6f5af5d7] duration-500 ease-in-out cursor-pointer text-white hover:bg-[#6F5AF5] hover:brightness-125">
                            <IoMdSearch className="text-3xl absolute top-2 left-2"/>
                        </div>
                        <FaLocationArrow className="text-[#6F5AF5] absolute text-2xl top-3.5 left-5"/>
                    <div>
                        <p className="text-white">Roger Anacleto</p>
                    </div>
                </section>
                <section className="w-full bg-[#020817] h-40 flex items-center justify-between border border-solid border-gray-100/20 rounded-lg mt-13">
                    <div className="ml-7.5">
                        <p className="text-white text-3xl">Adicionar Novo Registro</p>
                        <p className="text-gray-100/60 mt-2.5">Adicione um novo registro para controlar sua expedição.</p>
                    </div>
                    <button className="bg-[#6f5af5d7] duration-500 ease-in-out cursor-pointer p-2 rounded-full mr-7.5 border border-solid border-gray-100/20 text-white hover:bg-[#6F5AF5] hover:brightness-125">
                        <IoAdd className="text-4xl"/>
                    </button>
                </section>
                <section className="mt-5 border border-solid border-gray-100/20 w-full rounded-lg bg-[#020817]">
                    <div className="ml-7.5 mt-5 mb-5">
                        <p className="text-white text-3xl">Resumo de expedição</p>
                        <p className="text-gray-100/60 mt-2.5">Atualmente você possui 1 registro na sua tabela.</p>
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
                                <tr className="">
                                    <td className="p-7.5">João</td>
                                    <td className="p-7.5">5400000-00000</td>
                                    <td className="p-7.5">Erechim</td>
                                    <td className="p-7.5">20/05/2025</td>
                                    <td className="p-7.5">15:30</td>
                                    <td className="p-7.5">Roger</td>
                                    <td className="flex gap-6 items-center p-7.5">
                                        <button className="cursor-pointer"><RxPencil1/></button>
                                        <button className="cursor-pointer"><FaRegTrashAlt/></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </section>
            </main>
        </div>
    )
}