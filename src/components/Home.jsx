import React, { useState } from 'react'
import Header_hito from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../pizzas.js'


const Home = () => {
 /* console.log (pizzas)*/
 /* const [listaPizzas, setListaPizzas] = useState (pizzas)*/
 /* const listaPizzas = [...pizzas]*/
  return (
    <>
    <Header_hito/>
    <div className = "galeria">
    {pizzas.map ((pizza)=>(
    <CardPizza className = "cardPizza"
    key={pizza.id}
    price={pizza.price}
    img={pizza.img}
    id={pizza.id}
    name={pizza.name}
    desc={pizza.desc}
    ingredients = {pizza.ingredients}
    />  
    ))}
   </div>
  </>
   )
  }

export default Home