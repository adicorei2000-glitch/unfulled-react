import React from 'react'

import { Route, Routes } from 'react-router-dom'
import HomeComponent from './home'
import ContactComponent from './contact'
import AboutComponent from './about'
import Service from './service'
import Portfolio from './portfolio'
import ErrorComponent from './error'
import LoginComp from './pages/login'
import Navbar from './navbar'
import ToDoComponent from './todo'
import ApiConnect from './pages/ApiConnect'

const RouterComp = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginComp />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/todo" element={<ToDoComponent />} />
        <Route path='*' element={<ErrorComponent />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="ApiConnect" element={<ApiConnect />} />


      </Routes>

    </>
  )
}

export default RouterComp