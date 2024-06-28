import React, { useState } from 'react'
import './LoginForm.css'
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const LoginFrom = () => {
  const [password, setpassword] = useState('');
  
  const [showPassword, setshowPassword] = useState(false);
  
  const togglePassword = () => {
    setshowPassword(!showPassword)
  }

  return (
    <div className='wrapper'>
      <form action="">
        <h1> Login </h1>
        <div className='input-box'>
          <input type='text' placeholder='Username'  required/>
          <FaUserAlt />
        </div>
        <div className="input-box">
          <input type={showPassword ? 'text' : 'password'} placeholder='Password' required /> 
          <div className='icon' onClick={togglePassword}>
            {showPassword ? <FaEyeSlash />: <FaEye/>}
          </div>
          
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox' /> Rememeber me</label>
          <a href='#'> Forgot password </a>
        </div>
        <button type="submit"> Login </button>
        <button type="button"> Login with Google  <FcGoogle /> </button>
        <div className='register-link'>
          <p> Don't have an account? <a href='#'> Register </a> </p>
        </div>
      </form>
    </div>
  )
}

export default LoginFrom