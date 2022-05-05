import './App.css';
import Navbar from './components/header.js/Navbar';
import Newnav from './components/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Sign_in from './components/signup_silde/Sign_in';
import Signup from './components/signup_silde/Signup';
import {Routes,Route } from "react-router-dom"
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

function App() {
  
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])
  
  return (
    <>
    {
      data ? (
   <>
  <Navbar/>
  <Newnav/>
  <Routes>
    <Route path='/' element={<Maincomp/>} />
    <Route path='/login' element={<Sign_in />} />
    <Route path='/register' element={<Signup />} />
    <Route path='/getproductsone/:id' element={<Cart />} />
    <Route path='/buynow' element={<Buynow />} />
  </Routes>
   </>
    ) : (
      <div className="circle">
        <CircularProgress />
        <h2> Loading....</h2>
      </div>
    )
  }

  </>
  );
}

export default App;
