import { createContext, type ReactNode } from "react";
import { useState } from "react";
import { type DataProps } from "../pages/Home";

interface UpdateProps{
    records: DataProps | null;
    changeUpdateModal: (register: DataProps) => void;
}
interface ChildrenProps{
    children: ReactNode
}

export const UpdateContext = createContext({} as UpdateProps)

const UpdateProvider = ({children}: ChildrenProps) => {
const [records, setRecords] = useState<DataProps | null>(null)

const changeUpdateModal = (register: DataProps) => {
    setRecords(register)
}
    return(
        <UpdateContext.Provider value={{changeUpdateModal, records}}>
            {children}
        </UpdateContext.Provider>
    )
}
export { UpdateProvider };