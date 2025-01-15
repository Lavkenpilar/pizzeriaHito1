import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext ()

const PizzaProvider = ({children}) => {

    const [info, setInfo]=useState([])

useEffect (()=>{
  fetch ('http://localhost:5000/api/pizzas')
  .then((res)=>res.json())
  .then ((data)=>{
    setInfo(data)
    })
  },[])

  
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
    <PizzaContext.Provider value={{info, setInfo, useEffect, pizza, setPizza}}>
        {children}
    </PizzaContext.Provider>
  )
}
export default PizzaProvider