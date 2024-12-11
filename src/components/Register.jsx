import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Register = () => {
const [email, setEmail]= useState ('')
const [password, setPassword] = useState ('')
const [confirmPassword, setConfirmPassword]= useState('')
const [error, setError] = useState (false)

const validarDatos = (e) =>{
  e.preventDefault ()
  if (email.trim()==='' || password.trim()==='' || confirmPassword.trim()=== '')
  {
    setError('Todos los campos son obligatorios')
    return
}
if (password.length < 6) {
  setError ('La contraseña debe tener al menos 6 caracteres')
      return }

  if (password !== confirmPassword) {
    setError('Las contraseñas no coinciden');
    return;
  }

setError ('')
alert ('Formulario enviado con éxito')
}
  return (
    
    <Form className='formulario' onSubmit={validarDatos}>     
    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail" >
    {error&& <p className='error1'>{error}</p>}  
      <h1>Login</h1>     
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}
      value={email} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  onChange = {(e)=>setPassword (e.target.value)}
      value = {password} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange = {(e)=>setConfirmPassword (e.target.value)}
      value = {confirmPassword} />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
     </Form.Group>
    <Button variant="primary" type="submit" className="mb-5">
      Submit
    </Button>
  </Form>
  )
}

export default Register