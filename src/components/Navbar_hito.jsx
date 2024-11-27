import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';
import formatNumber from '../utils/formatNumber';


const Navbar_hito = () => {
  const total = 25000
     let token = false
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
          <Nav.Link href="#action1"  style={{ border: '1px solid white', marginRight:'8px', color:'white', borderRadius:'6px'}}>🍕Home</Nav.Link>
          <Nav.Link href="#action2" style={{ border: '1px solid white', marginRight:'8px', color:'white', borderRadius:'6px'}}>{ token === false ? text1:text3}</Nav.Link>
          <Nav.Link href="#action2" style={{ border: '1px solid white', marginRight:'8px', color:'white', borderRadius:'6px' }}>{ token === false ? text2:text4}</Nav.Link>
          </Nav>
        <Button variant="outline-primary">🛒Total:{formatNumber(total)}</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
);
}

export default Navbar_hito