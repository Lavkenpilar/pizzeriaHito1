import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import CardPizza from '../components/CardPizza'



const Home = () => {

 const {info} = useContext (PizzaContext)
 

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