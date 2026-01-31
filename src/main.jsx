import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import './index.css'
import RouterComp from "./assets/router.jsx"



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterComp />
  </BrowserRouter>
)
