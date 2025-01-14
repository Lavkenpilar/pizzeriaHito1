import { Route, Routes} from "react-router-dom"
import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from "./context/CartContext";
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



function App() {
  //const [count, setCount] = useState(0)

  return (
  
    <CartProvider>
      <Navbar_hito/>
      <Header_hito/>
      <Routes>
        <Route
        path="/"
        element = {<Home/>}
        />
        <Route
        path="/register"
        element={<Register/>}
        />
        <Route
        path="/login"
        element={<Login/>}
        />
        <Route
        path="/cart"
        element=  {<Cart/>}
        />
        <Route
        path="/pizza/001"
        element={<Pizza/>}
        />
        <Route
        path="/profile"
        element={<Profile/>}
        />
        <Route
        path="/*"
        element={<NotFound/>}
        />
   </Routes>
      <Footer/>   
      </CartProvider>

  )
}

export default App
