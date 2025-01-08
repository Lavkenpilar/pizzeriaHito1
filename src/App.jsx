import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
/*import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import Navbar_hito from './components/Navbar_hito';
import Home from './components/Home';
import Footer from './components/Footer';
//import Register from './components/Register';
//import Login from './components/Login';
import Cart from './components/Cart'
import Pizza from './components/Pizza';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar_hito/>
      {/*<Register/>*/}
     <Home/>
    {/* <Login/>*/}
    {/*<Cart/>*/}
   {/*<Pizza/>*/}
      <Footer/>
   
</>
  )
}

export default App
