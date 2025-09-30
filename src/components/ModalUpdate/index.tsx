import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { db } from "../../services/firebaseConnection";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { UpdateContext } from "../../contexts/UpdateContext";
import type { DataProps } from "../../pages/Home";

interface ChangeModalUpdate {
  onCloseModal: (changed: boolean) => void;
}

export function ModalUpdate({ onCloseModal }: ChangeModalUpdate) {
const { records } = useContext(UpdateContext);
const [name, setname] = useState(records?.name || "");
const [telephone, setTelephone] = useState( records?.telephone || "");
const [city, setCity] = useState(records?.city || "");
const [date, setDate] = useState(records?.date || "");
const [time, setTime] = useState(records?.time || "");
const [dispatcher, setDispatcher] = useState(records?.dispatcher || "");
const [observations, setObservations] = useState(records?.observations || "");


function onCloseModalUpdate(){
  onCloseModal(true)
}

async function saveData(id: DataProps | null){
  if (!id) return;

  onCloseModal(true);

  const refDoc = doc(db, "records", id?.id);
  await updateDoc(refDoc, {
    name: name,
    telephone: telephone,
    city: city,
    date: date,
    time: time,
    dispatcher: dispatcher,
    observations: observations
  })
  .then(() => {
    alert("o registro foi atualizado!!")
  })
  .catch((error) => {
    alert(error)
  })
}


  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onCloseModalUpdate()}
      />

      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="bg-[#020817] w-2xl flex flex-col border border-gray-100/20 p-5.5 rounded-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cursor-pointer absolute right-5 top-4"
            onClick={onCloseModalUpdate}
          >
            <IoClose className="text-gray-100/60 text-2xl" />
          </button>

          <h2 className="text-white text-lg font-bold">Atualizar registro</h2>
          <p className="text-gray-100/60 mb-5.5">
            Preencha os campos necessários para atualizar o registro.
          </p>
            <div className="flex flex-col">
              <div className="flex justify-between gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-white pb-2">Nome</label>
                  <input
                    type="text"
                    className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                  <label className="text-white pb-2">Cidade</label>
                  <input
                    type="text"
                    className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <label className="text-white pb-2">Hora Retirada</label>
                  <input
                    type="time"
                    className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-white pb-2">Telefone</label>
                  <input
                    type="text"
                    className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                  <label className="text-white pb-2">Data Retirada</label>
                  <input
                    type="date"
                    className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <label className="text-white pb-2">Expedidor</label>
                  <input
                    type="text"
                    className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    value={dispatcher}
                    onChange={(e) => setDispatcher(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-white pb-2">Observações</label>
                <textarea
                  rows={5}
                  className="border border-gray-100/20 rounded-lg focus:border-green-100/40 outline-none text-white p-3.5"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                ></textarea>
              </div>

              <button className="text-[#000] bg-[#6f5af5d7] mt-4 p-2 rounded-lg cursor-pointer hover:bg-[#6F5AF5] hover:brightness-125 duration-500" onClick={() => saveData(records)}>
                Atualizar registro
              </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
