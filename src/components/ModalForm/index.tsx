export function ModalForm(){
    return(
        <div>
            <main className="flex justify-center">
                    <div className="absolute bg-[#020817] w-2xl flex flex-col border border-gray-100/20 top-1/2 + -translate-y-1/2 p-5.5 rounded-lg">
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
                                <textarea rows={5} className="border border-gray-100/20 rounded-lg focus:border-green-100/40 outline-none"></textarea>
                            </div>
                            <button className="text-[#000] bg-[#6F5AF5] mt-4 p-2 rounded-lg cursor-pointer">Criar registro</button>
                        </form>
                    </div>
            </main>
        </div>
    )
}