import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
//import { pizzaCart } from '../pizzas.js'

const Cart = () => {
    //console.log (pizzaCart)
   // const [cart, setCart]=useState(pizzaCart)

   const { cart, setCart }= useContext(CartContext)
   const { token }= useContext (UserContext)
   console.log (token)
   const navigate = useNavigate()

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

  // metodo para realizar el pago
  const handlePayment = async () => {
    if (!token){
      alert ('Debes iniciar sesión para realizar el pago')
      return
    }
    // crear los datos a enviar
    const orderData = {
      cart, // el carrito con todas las pizzas y cantidades
      total: totalGeneral, // el total general de la compra
    }
    try {
      const response = await fetch ('http://localhost:5000/api/checkouts',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`, // enviar el token en los encabezados para autenticacion
        },
        body: JSON.stringify(orderData), // convertir los datos del carrito a JSON
      })
      const data = await response.json ()
      if (response.ok) {
        //si el pago es exitoso, es posible mostrar un mensaje o redirigir
        alert ('Pago exitoso.Gracias por tu compra!')
        setCart ([]) // vaciar el carrito
        //en este punto es posible redirigir al usuario a una pagina de confirmación de pago
        navigate ('/pago')
 } else {
        // si el backend retorna un error
        alert (data?.error || 'Hubo un problema con el pago, por favor inténtalo nuevamente')
      }
      } catch (error) {
        console.log ('Error al procesar el pago:', error)
        alert ('Hubo un error al procesar el pago')
      }
    }
   
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
        <Button disabled={!token} variant= "primary" onClick={handlePayment}>Pagar</Button>
        </>
      
      )}
export default Cart