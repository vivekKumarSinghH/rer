import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const Cart=()=>{

    const {cart}= useContext(CartContext)
    return <nav>
    <h1>Total Number of Items: {cart}</h1>
    </nav>
}