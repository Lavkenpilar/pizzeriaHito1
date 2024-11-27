import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import formatNumber from '../utils/formatNumber';



const CardPizza = ({name, ingredients, price, img}) => {
  const numberPrice = Number (price)
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {ingredients}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
          <h4>Precio:{formatNumber (numberPrice)}</h4>
          <div className='botones'>
          <Button variant="light" className="border border-dark">👀Ver más</Button>
          <Button variant="dark">Añadir🛒</Button>
          </div>
        </Card.Footer>
      
    </Card>
  )
}

export default CardPizza