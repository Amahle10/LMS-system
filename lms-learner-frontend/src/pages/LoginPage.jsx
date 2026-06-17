import React from "react";
import "./LoginPage.css";
import { Link, Route } from "react-router-dom";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 

  function validatePassword(password) {
    if (password == '12345678'){
      navigate("/"); // Redirect to homepage on successful login
    }
    else {
      alert("Invalid password. Please try again.");
      return false;
    }
  }
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
        <button type="submit" onClick={() => {validatePassword(document.querySelector('input[type="password"]').value);}}>Login</button>
      </form>
    </div>
  );
}

export default Login;