import { createContext, useState } from "react";



export const CartContext = createContext()

const CartProvider = ({children})=>{

     const [cart, setCart]=useState([])

     const handleAñadir = (pizza)=> {
       // verifica si la pizza ya esta en el carrito
        const pizzaRepetida = cart.find ((item)=>item.id === pizza.id)
        if (pizzaRepetida) {
            //si la pizza ya está en el carrito, incrementa el count
            setCart ((prevCart)=>
                prevCart.map ((item) =>
                    item.id=== pizza.id ? {...item, count:item.count + 1} : item )
        )
        }
         else {
            //si la pizza no está en el carrito, agrégala con count=1
            setCart((prevCart)=>[...prevCart, {...pizza, count:1 }])
         }
    }
     
        return (
        <CartContext.Provider value={{ cart, setCart, handleAñadir}}>
            {children}
        </CartContext.Provider>
     )

}
export default CartProvider