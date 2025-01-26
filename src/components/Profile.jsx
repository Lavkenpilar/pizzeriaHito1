import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Profile = () => {

  const { user, logout } = useContext (UserContext)

  return (
<div>
  {user ? ( 
    <>
    <p className="parra-profile">Has iniciado sesión como: {user.email} </p>
 <button 
 className="boton-profile"
 onClick={logout} 
 >Cerrar Sesión </button>
 </>
  ):(
      <p className="parra2-profile">Por favor inicia sesión con tu usuario</p>
    )}
</div>
  )
}

export default Profile