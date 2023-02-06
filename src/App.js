import React from "react";
import './App.css'
import { useState } from "react";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Cartpage from './Component/Cart'
function App() {

  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Routes>
      <Route path ='/' element={<Home />}/>
      <Route path="/cart" element={<Cartpage/>}/>
      </Routes>
      
      </div>
      
    </BrowserRouter>
  );
}

export default App;
