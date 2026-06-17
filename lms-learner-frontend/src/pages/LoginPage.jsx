import React from "react";
import "./LoginPage.css";
import { Link, Route } from "react-router-dom";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate(); 
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit" onClick={() => {navigate("/");}}>Login</button>
      </form>
    </div>
  );
}

export default Login;