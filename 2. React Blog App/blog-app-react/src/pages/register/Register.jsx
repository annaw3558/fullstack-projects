import './register.css';
import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type='text' className='registerInput' placeholder='Enter your username...'/>
            <label>Email</label>
            <input type='text' className='registerInput' placeholder='Enter your email...'/>
            <label>Password</label>
            <input type='password' className='registerInput' placeholder='Enter your password...'/>
            {/* <input type='password' className='registerInput' placeholder='Re-Enter your password...'/> */}
            <button className="registerButton">Register</button>
        </form>
        <form className="loginForm">
            <label>Have an Account?</label>
            <button className="loginButton">
            < Link to='/login'>Login Here</Link>
            </button>
        </form>
    </div>
  )
}
