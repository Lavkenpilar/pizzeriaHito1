import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Logout = () => {

const { logout } = useContext (UserContext)

  return (
    logout
  )
}

export default Logout