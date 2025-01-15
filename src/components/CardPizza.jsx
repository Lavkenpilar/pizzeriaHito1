import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import formatNumber from '../utils/formatNumber';

const CardPizza = ({price, img, id, name, desc, ingredients}) => {
  const numberPrice = Number (price)
  
  const {handleAñadir } = useContext(CartContext)

 
 
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <p>{id}</p>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div className="descripción">
          {desc}
          </div>
          <br/>
          <div className="ingredientes">
          <strong>Ingredientes:</strong>
          <ul>
          {ingredients.map ((ingredient, indice) => (
            <li key={indice}>{ingredient}</li>
          ))}
          </ul>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
          <h4>Precio:{formatNumber (numberPrice)}</h4>
          <div className='botones'>
          <Button variant="light" className="border border-dark">👀Ver más</Button>
          <Button variant="dark" onClick={()=> handleAñadir({ id, name, desc, price, img, ingredients })}>Añadir🛒</Button>
          </div>
        </Card.Footer>      
    </Card>
  )
}

export default CardPizza