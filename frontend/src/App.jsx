import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./page/Home/Home"
import Card from "./page/Cards/Card"
import PlaceOrder from "./page/PlaceOrder/PlaceOrder"
import Fooder from "./components/Fooder/Fooder"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import {useState} from 'react';
import Verify from "./page/Verify/Verify"
import MyOrders from "./page/MyOrders/MyOrders"


const App = () => {

 const[showLogin,setShowLogin] = useState(false);


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Card/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
      </Routes>
    </div>
    <Fooder/>
    </>
  )
}

export default App