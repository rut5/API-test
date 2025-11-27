import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Navbar from './navbar.jsx';
import Home from './pages/home.jsx';

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
