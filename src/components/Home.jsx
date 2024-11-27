import React from 'react'
import Header_hito from './Header'
import CardPizza from './CardPizza';




const Home = () => {
  return (
    <>
    <Header_hito/>
    <div className='cards'>
    <CardPizza
    name="Napolitana"
    price={5950}
    ingredients=" 🍕Mozzarella, tomates, jamón, oregano"
    img="/assets/img/napolitana2.png"
   />
    <CardPizza
    name="Española"
    price={6950}
    ingredients="🍕Mozzarella, gorgonzola, parmesano, provolone"
    img="/assets/img/espanola.png" 
   />
    <CardPizza
    name="Pepperoni"
    price={6950}
    ingredients="🍕Mozzarella, pepperoni, oregano"
    img="/assets/img/peperoni.png" 
   />
   </div>
  </>
  )
}

export default Home