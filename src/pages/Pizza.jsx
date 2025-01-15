import { useContext } from 'react'
import CardPizza from '../components/CardPizza'
import { PizzaContext } from '../context/PizzaContext'


const Pizza = () => {

  const{pizza}= useContext (PizzaContext)

    
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
      <p> cargando...</p>  
  )}
   </div>
   
  )
}

export default Pizza