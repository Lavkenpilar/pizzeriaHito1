import { createContext, useState } from "react";
import { pizzaCart } from '../pizzas'

export const CartContext = createContext()

const CartProvider = ({children})=>{

     const [cart, setCart]=useState(pizzaCart)

     return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
     )

}
export default CartProvider