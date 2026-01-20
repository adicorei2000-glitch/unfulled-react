import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",padding:"10px",backgroundColor:"lightgray",
    fontWeight:"normal",fontSize:"20px"}}>
     <Link to="/home">
        <div style={{fontSize:"20px",cursor:"pointer"}}>Home</div>
        </Link>
        <Link to="/contact">
        <div style={{fontSize:"20px",cursor:"pointer"}}>Contact</div>
        </Link>
        <Link to="/about">
        <div style={{fontSize:"20px",cursor:"pointer"}}>About</div>
        </Link>
        <Link to="/services">
        <div style={{fontSize:"20px",cursor:"pointer"}}>Services</div>
        </Link>
        <Link to="/portfolio">
        <div style={{fontSize:"20px",cursor:"pointer"}}>Portfolio</div>
        </Link>
    </div>
  )
}
export default Navbar

