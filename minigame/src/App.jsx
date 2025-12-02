import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Navbar from "./navbar.jsx";
import Registration from "./pages/registration.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import "./home.css"

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
