import { IoClose } from "react-icons/io5";

export function ModalForm(){
    return(
        <div>
            <main className="flex justify-center">
                    <div className="absolute bg-[#020817] w-2xl flex flex-col border border-gray-100/20 top-1/2 + -translate-y-1/2 p-5.5 rounded-lg">
                        <button className="cursor-pointer"><IoClose className="text-gray-100/60 text-2xl absolute right-5 top-4"/></button>
                        <h2 className="text-white text-lg font-bold">Criar Novo Registro</h2>
                        <p className="text-gray-100/60 mb-5.5">Preencha os campos para criar um novo registro de expedição.</p>
                        <form className="flex flex-col">
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Nome</label>
                                    <input type="text" className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"/>
                                    <label className="text-white">Cidade</label>
                                    <input type="text" className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"/>
                                    <label className="text-white">Hora Retirada</label>
                                    <input type="time" className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"/>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-white">Telefone</label>
                                    <input type="text" className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"/>
                                    <label className="text-white">Data Retirada</label>
                                    <input type="date" className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"/>
                                    <label className="text-white">Expedidor</label>
                                    <input type="text" className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-white">Observações</label>
                                <textarea rows={5} className="border border-gray-100/20 rounded-lg focus:border-green-100/40 outline-none text-white p-3.5"></textarea>
                            </div>
                            <button className="text-[#000] bg-[#6f5af5d7] mt-4 p-2 rounded-lg cursor-pointer hover:bg-[#6F5AF5] hover:brightness-125 duration-500">Criar registro</button>
                        </form>
                    </div>
            </main>
        </div>
    )
}