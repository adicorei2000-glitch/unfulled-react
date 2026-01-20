import React from "react"
import { } from "react-router-dom"
import { createRoot } from "react-dom/client"
import './index.css'
import RouterComp from "./assets/router.jsx"
import LoginComp from "./assets/pages/login.jsx"
import { BrowserRouter, Route, Routes } from "react-router"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterComp />
    <LoginComp />
    <Route />
    <Routes />
  </BrowserRouter>
)
