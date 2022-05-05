import './App.css';
import Navbar from './components/header.js/Navbar';
import Newnav from './components/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Sign_in from './components/signup_silde/Sign_in';
import signup from './components/signup_silde/Signup';
import {Routes,Route } from "react-router-dom"

function App() {
  return (
   <>
  <Navbar/>
  <Newnav/>
  <Routes>
    <Route path='/' element={<Maincomp/>} />
    <Route path='/login' element={<Sign_in />} />
    <Route path='/register' element={<signup />} />
  </Routes>
   </>
  );
}

export default App;
