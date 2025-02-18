import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes, Route } from "react-router-dom";
import Buy from './house/Buy';

export default function App() {
  return (
    // <Router>
    <div>
    <Header/>
     <Routes>
        <Route path="/buy" element={<Buy/>} />
      </Routes>
    <Footer/>
    </div>
    // </Router>
  )
}
