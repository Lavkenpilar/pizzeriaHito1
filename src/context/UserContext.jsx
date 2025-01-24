import React, { useContext, useState } from 'react'
import { createContext } from 'react'


export const UserContext = createContext ()

const UserProvider = ({children}) => {

const [token, setToken]= useState (true)

const logout = ()=> {
setToken (false)
}

  return (
    <UserContext.Provider value={{token, setToken, logout}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider