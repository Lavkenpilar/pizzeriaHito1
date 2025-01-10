import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
    <img src='/assets/img/desierto.jpg' alt='imagen de desierto'/>
    <h2>Ups! como llegamos aca!</h2>
    <h3> No pasa nada, volvamos a empezar <Link to={"/"} className='btn btn-primary'>Inicio</Link></h3>
    </div>
  )
}

export default NotFound