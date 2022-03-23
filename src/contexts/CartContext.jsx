
import { createContext, useState } from "react";

export const CartContext=createContext();

export const CartContextProvider=({children})=>{

    const [cart,setCart]=useState(0)
    const handleUpdate=(x)=>{
        setCart(cart+x)
        }

    return <CartContext.Provider value={{cart,handleUpdate}}>
    {children}
    </CartContext.Provider>
}

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/vivekKumarSinghH/rer.git
// git push -u origin main