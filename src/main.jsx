import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import CartProvider from "./context/CartContext";
import PizzaProvider, { PizzaContext } from './context/PizzaContext.jsx';import './index.css'
import UserProvider from './context/UserContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CartProvider>
    <PizzaProvider>
    <App />
    </PizzaProvider>
    </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
