import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"
import { useRef, useContext } from "react";
import axios from "axios";
// todo login css broke
// got it working but broke again :(
export default function Login() {

  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})

    } catch(err) {
      dispatch({type: "lOGIN_FAILURE"});
    }
  };

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              className="loginInput" 
              placeholder="Enter your username..."
              ref={usernameRef}
            />
            <label>Password</label>
            <input 
              type="password" 
              className="loginInput" 
              placeholder="Enter your password..."
              ref={passwordRef}
            />
            <button 
              className="loginButton" 
              type="submit"
              disabled={isFetching}
            >
              Login
            </button>
        </form>
        <form className="registerForm">
            <label>Don't Have an Account?</label>
            <button className="registerButton">
              <Link to="/register">Register Here</Link>
            </button>
        </form>
    </div>
  )
}
