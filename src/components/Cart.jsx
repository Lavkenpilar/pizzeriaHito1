import React, { useState } from 'react'
import { pizzaCart } from '../pizzas.js'

const Cart = () => {
    //console.log (pizzaCart)
    const [cart, setCart]=useState(pizzaCart)
  return (
    <div>Cart</div>
  )
}

export default Cart