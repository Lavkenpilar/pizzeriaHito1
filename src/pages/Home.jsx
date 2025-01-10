import React, { useState, useEffect } from 'react'
import CardPizza from '../components/CardPizza'
//import { pizzas } from '../pizzas.js'


const Home = () => {
 /* console.log (pizzas)*/
 /* const [listaPizzas, setListaPizzas] = useState (pizzas)*/
 /* const listaPizzas = [...pizzas]*/
 const [info, setInfo]=useState([])

useEffect (()=>{
  fetch ('http://localhost:5000/api/pizzas')
  .then((res)=>res.json())
  .then ((data)=>{
    setInfo(data)
   // console.log (data)
  })
  },[])
 

return (
  
    <div className = "galeria">
    {info.map ((pizza)=>(
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
  
)
  }

export default Home