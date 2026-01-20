import React from 'react'
import { useNavigate } from 'react-router'

const LoginComp = () => {
    const navigate = useNavigate();
    const handlelogin=( )=>{
        alert("You have successfully logged in")
        navigate("/home")

    }
  return (
    <div>
  <div style={{display:"flex",flexDirection:"column",width:"150px",margin:"100px auto",gap:"10px"}}>
    <input type="text" placeholder='email' />
    <input type="password" placeholder='password' />
    <button onClick={handlelogin}>Sign In</button>
  </div>
</div>
  )
}

export default LoginComp