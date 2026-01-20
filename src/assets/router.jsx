import React from 'react'
import Navbar from './navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './home'
import ContactComponent from './contact'
import AboutComponent from './about'
import Service from './service'
import Portfolio from './portfolio'
import ErrorComponent from './error'
import LoginComp from './pages/login'

const RouterComp = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginComp />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/services" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default RouterComp