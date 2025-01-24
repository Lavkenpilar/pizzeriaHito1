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

  
 /* const { id } = useParams()
  
    const [pizza, setPizza]=useState(null);
  
    useEffect (()=>{
      fetch (`http://localhost:5000/api/pizzas/${id}`)
      .then((res)=>res.json())
      .then ((data)=>{
        setPizza(data)
        console.log (data)
      })
      },[id])*/

  return (
    <PizzaContext.Provider value={{info, setInfo}}>
        {children}
    </PizzaContext.Provider>
  )
}
export default PizzaProvider