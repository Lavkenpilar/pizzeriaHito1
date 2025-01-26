import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Logout = () => {

  const { logout } = useContext(UserContext)

  return (
    <div>Logout</div>
  )
}

export default Logout