import { createContext, useState } from "react";


const Context = createContext()
function Provider({children}){
    const [order, setOrder] = useState([])
    const [som, setSon] = useState(0)
    const [suv, setSuv] = useState('')
    return (
        <Context.Provider value={{order, setOrder, som, setSon, suv, setSuv}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}