import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'




export const UserContext = createContext ()

const UserProvider = ({children}) => {

const [token, setToken]= useState (true)
const [email, setEmail]= useState (localStorage.getItem("email")|| null)
const [user, setUser]= useState (null)


const navigate=useNavigate()

const logout = ()=> {
setToken (false)
setEmail (null)
setUser (null)
localStorage.removeItem("token")
localStorage.removeItem("email")
navigate('/login')
}

  const login = async (email, password) => {
    try{
    const response = await fetch ("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }, // se especifica entre llaves porque es un objeto
  body: JSON.stringify({
  email,
  password,
  }),
    })
    const data = await response.json ()
    if (data.token) {

      localStorage.setItem ("token", data.token)
      localStorage.setItem("email", email)
      setToken(data.token)
      setEmail (email)
      navigate ('/profile') // redirigir al perfil despues de iniciar sesión
    }
    alert (data?.error || "Authentication successful!")
    } catch (error){
  console.error ("Error al iniciar sesión:", error)
  alert ("A ocurrido un error al iniciar sesión")
}
  }

  const register = async (email, password) => {
    try{
    const response = await fetch ("http://localhost:5000/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
   // se especifica entre llaves porque es un objeto
  body: JSON.stringify({
  email,
  password,
  }),
    })
    const data = await response.json ()
      if (data.token){
        localStorage.setItem("token", data.token)
        localStorage.setItem("email", email)
        setToken (data.token)
        setEmail(email)
      }
    alert (data?.error || "Authentication successful!")
  } catch (error){
console.error ("Error al iniciar sesión:", error)
alert ("A ocurrido un error al iniciar sesión")
}
}

//useEffect para obtener datos del usuario solo si hay un token válido
  useEffect(()=>{
      if (token){
      fetch("http://localhost:5000/api/auth/me",{
        headers:{
          Authorization:`Bearer ${token}`,
        }
      })
      .then ((response)=>response.json())
      .then ((data) =>{setUser(data)})
      .catch((error)=>console.error("Error al obtener el usuario:", error))
    }
  }, [token])

 return (
    <UserContext.Provider value={{token, email, user, setToken, setEmail, setUser, logout, login, register}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider