import { useState } from "react";
import './register.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register/", {
      username,
      email,
      password
      });
      console.log(res);
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type='text' 
              className='registerInput' 
              placeholder='Enter your username...'
              onChange={e=> setUsername(e.target.value)}
            />
            <label>Email</label>
            <input 
              type='text' 
              className='registerInput' 
              placeholder='Enter your email...'
              onChange={e=> setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
              type='password' 
              className='registerInput' 
              placeholder='Enter your password...'
              onChange={e=> setPassword(e.target.value)}
            />
            {/* <input type='password' className='registerInput' placeholder='Re-Enter your password...'/> */}
            <button className="registerButton" type="submit">Register</button>
        </form>
        <form className="loginForm">
            <label>Have an Account?</label>
            <button className="loginButton">
            < Link to='/login'>Login Here</Link>
            </button>
        </form>
        {/* todo: format below text */}
        {error && <span > Something went wrong! </span>}
    </div>
  )
}
