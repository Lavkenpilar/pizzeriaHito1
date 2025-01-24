import { Navigate, Route, Routes} from "react-router-dom"
import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

/*import ReactDOM from 'react-dom'*/
import Navbar_hito from './components/Navbar_hito';
import Header_hito from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart'
import Pizza from './pages/Pizza';
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Logout from "./components/Logout";



function App() {
  //const [count, setCount] = useState(0)

  const { token } = useContext (UserContext)

  return (
  
   <>
      <Navbar_hito/>
      <Header_hito/>
      <Routes>
        <Route
        path="/"
        element = {<Home/>}
        />
        <Route
        path="/register"
        element={ token ? <Register/> : <Home/>}
        />
        <Route
        path="/login"
        element={ token ? <Login/> : <Home/>}
        />
        <Route
        path="/cart"
        element=  {<Cart/>}
        />
        <Route
        path="/pizza/:id"
        element={<Pizza/>}
        />
        <Route
        path="/profile"
        element={token ? <Profile/> : <Navigate to="/login"/>}
        />
        <Route
        path="/logout"
        element={<Logout/>}
        />
        <Route
        path="/*"
        element={<NotFound/>}
        />
   </Routes>
      <Footer/>   
     
      </>
  )
}

export default App
