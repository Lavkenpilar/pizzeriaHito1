import React, { useContext, useState } from 'react'
import { createContext } from 'react'


export const UserContext = createContext ()

const UserProvider = ({children}) => {

const [token, setToken]= useState (true)
const [email, setEmail]= useState (localStorage.getItem("email")|| null)

const logout = ()=> {
setToken (false)
setEmail (null)
localStorage.removeItem("token")
localStorage.removeItem("email")
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
    console.log (data.token)
    alert (data?.error || "Authentication successful!")
    localStorage.setItem("token",data.token)
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
    console.log (data.token)
    alert (data?.error || "Authentication successful!")
    localStorage.setItem("token",data.token)
} catch (error){
console.error ("Error al iniciar sesión:", error)
alert ("A ocurrido un error al iniciar sesión")
}
}
 return (
    <UserContext.Provider value={{token, setToken, logout, login, register}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider