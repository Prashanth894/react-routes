import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Home from "./Components/Home";
import Crypto from "./Components/Cryptocurrency";
import Covid from './Components/Covid';
import Nasa from './Components/Nasa';
import Login from "./Components/Login";

function App() {
  return (
   <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/Cryptocurrency" element={<Crypto/>} /> 
    <Route path="/Nasa" element={<Nasa/>} /> 
    <Route path="/Covid" element={<Covid/>} /> 
    <Route path="/login" element={<Login/>} />

    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
