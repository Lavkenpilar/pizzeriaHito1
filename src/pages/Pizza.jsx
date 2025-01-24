import { useParams } from "react-router-dom";
import axios from "axios"
// axios es una libreria popular que permite realizr peticiones http, se instala en la terminal a través de npm install axios
//import { useContext } from 'react'
import { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza'
//import { PizzaContext } from '../context/PizzaContext'




const Pizza = () => {


  //const{pizza}= useContext (PizzaContext)
const { id } = useParams()
  
    const [pizza, setPizza]=useState(null);
  
    useEffect (()=>{
      fetch (`http://localhost:5000/api/pizzas/${id}`)
      .then((res)=>res.json())
      .then ((data)=>{
        console.log (data)
        setPizza(data)
       
      })
      },[id])

 if (pizza === null) {
  return <p>cargando...</p>
 }

    
  return (
    
    
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
      <p> No se encontró la pizza 😕</p>  
  )}
   </div>
   
  )
}

export default Pizza