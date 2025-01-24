import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import formatNumber from '../utils/formatNumber';
import Pizza from '../pages/Pizza';

const CardPizza = ({price, img, id, name, desc, ingredients}) => {
  const numberPrice = Number (price)
  
  const {handleAñadir } = useContext(CartContext)

  const clickIp = () => {

  }

 
 
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
      <p> {id} </p>
  
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
          <Link to={`/pizza/${id}`} variant="light" className="btn btn-secondary">👀Ver más</Link>
          <Button variant="dark" onClick={()=> handleAñadir({ id, name, desc, price, img, ingredients })}>Añadir🛒</Button>
          </div>
        </Card.Footer>      
    </Card>
  )
}

export default CardPizza