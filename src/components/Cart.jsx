import React, { useState } from 'react'
import { pizzaCart } from '../pizzas.js'

const Cart = () => {
    //console.log (pizzaCart)
    const [cart, setCart]=useState(pizzaCart)

    const handleAgregar = (indice) =>{
     cart [indice].count++
     setCart ([...cart]) 
    }

    const handleQuitar = (indice)=>{
      cart [indice].count--
      setCart([...cart.filter ((pizza)=>pizza.count > 0)])
    }
      
   const totalPizzas = cart.reduce((total, pizza) => total + pizza.count, 0);
   //console.log(totalPizzas)
   
   const totalGeneral = cart.reduce ((total, pizza)=>total+(pizza.price*pizza.count),0)
  // console.log (totalGeneral)
   
  return (
    <>
    <h4 className='titulo-cart'>Detalles del pedido:</h4>
    {
      cart.map((pizza, indice)=>(
          <div className='d-flex' key={indice}>
            <img src={pizza.img} width={70}/>
            <div className='div-nombre'>{pizza.name}</div>
            <p>$</p>
            <div>{pizza.price}</div>
            <button className='boton-suma-cart'onClick={()=>handleAgregar(indice)}>+</button>
            <span>{pizza.count}</span>
            <button className='boton-menos-cart' onClick={()=>handleQuitar(indice)}>-</button>
            <div><h5>Subtotal:$<span>{pizza.count*pizza.price}</span></h5></div>
            </div>
           ))
           }
        <h3 className='subtitulo-total'> Llevas {totalPizzas} pizzas, el total es $ {totalGeneral} </h3>
        <button className='boton-pagar'>Pagar</button>
        </>
      
      )}
export default Cart