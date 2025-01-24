import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';
import formatNumber from '../utils/formatNumber';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import  { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext';


const Navbar_hito = () => {
  const { cart }= useContext(CartContext)
  const total = cart.reduce ((total, pizza)=>total+(pizza.price*pizza.count),0)
    
  const { token, logout } = useContext (UserContext)

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

    const text1= "🔐Login"
    const text2= "🔐Register"
    const text3 = "🔓Profile" 
    const text4= "🔒Logout"
    return (
    <div className='navbar'>
    <Navbar expand="lg" className="bg-body-dark">
    <Container fluid>
      <Navbar.Brand href="#" style={{color:'white'}}>Pizzería Mama Mía!</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto Navbar-var"> 
          <Link to={"/"}  className="text-white ms-3 text-decoration-none">🍕Home</Link>
          <Link to={token ?"/profile":"/login"}  className="text-white ms-3 text-decoration-none">{ token  ? text3:text1}</Link>
          <Link to={token ?"#":"/register"}  className="text-white ms-3 text-decoration-none" onClick={token ? handleLogout : text2}>{ token  ? text4:text2}</Link>
          </Nav>
        <Link to={"/cart"} className='btn btn-primary'>🛒Total:{formatNumber(total)}</Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
);
}

export default Navbar_hito