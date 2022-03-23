import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const Button=()=>{

    const {handleUpdate}=useContext(CartContext)
    return <button
    onClick={()=>{
        handleUpdate(1)
    }}
    >
    Add
    </button>
}

