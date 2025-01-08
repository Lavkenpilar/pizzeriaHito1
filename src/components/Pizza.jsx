import React, { useState, useEffect } from "react"
import Header_hito from './Header'
import CardPizza from './CardPizza'


const Pizza = () => {

  const [pizza, setPizza]=useState({});

  useEffect (()=>{
    fetch ('http://localhost:5000/api/pizzas/p001')
    .then((res)=>res.json())
    .then ((data)=>{
      setPizza(data)
      console.log (data)
    })
    },[])
    
  return (
    <>
    <Header_hito/>
    <div className = "galeria">
    {pizza.id ? (
    <CardPizza className = "cardPizza"
    key={pizza.id}
    price={pizza.price}
    img={pizza.img}
    id={pizza.id}
    name={pizza.name}
    desc={pizza.desc}
    ingredients = {pizza.ingredients}
    />  
    ): (
      <p> cargando...</p>  
  )}
   </div>
   </>
  )
}

export default Pizza