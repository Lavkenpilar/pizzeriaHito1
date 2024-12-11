import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Login = () => {
  const [emailLogin, setEmailLogin]= useState ('')
  const [claveLogin, setClaveLogin] = useState('')
  const [errorLogin, setErrorLogin] = useState('')

  const validarDatoLogin = (e) => {
    e.preventDefault ()
    
    if (emailLogin.trim()==='' || claveLogin.trim()==='') {
      setErrorLogin ('Todos los campos son obligatorios')
      return 
    }
    if (claveLogin.length < 6){
      setErrorLogin ('La contraseña debe tener al menos 6 carácteres')
      return
    }

    setErrorLogin ('')
    alert ('Formulario enviado con éxito')
  }

  return (
    <Form className='formulario' onSubmit={validarDatoLogin}>     
    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail" >
    {errorLogin&& <p className='error2'>{errorLogin}</p>} 
      <h1>Login</h1>     
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmailLogin(e.target.value)}
      value = {emailLogin} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  onChange={(e)=>setClaveLogin(e.target.value)}
      value= {claveLogin} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
     </Form.Group>
    <Button variant="primary" type="submit" className="mb-5">
      Submit
    </Button>
  </Form>
  )
}

export default Login