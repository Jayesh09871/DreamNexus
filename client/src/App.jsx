import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes, Route } from "react-router-dom";
import Buy from './house/Buy';
import Rent from './house/Rent';
import Home from './pages/Home';

export default function App() {
  return (
    // <Router>
    <div>
    <Header/>
     <Routes>
     <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/Rent" element={<Rent/>} />
      </Routes>
    <Footer/>
    </div>
    // </Router>
  )
}
