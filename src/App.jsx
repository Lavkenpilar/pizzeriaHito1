import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
/*import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import Navbar_hito from './components/Navbar_hito';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar_hito/>
      <Home/>
      <Footer/>
   
</>
  )
}

export default App
