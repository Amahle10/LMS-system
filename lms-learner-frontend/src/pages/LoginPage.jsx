import React from "react";
import "./LoginPage.css";
import { Link, Route } from "react-router-dom";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function validateUser(useremail){
    if (useremail == 'amahle@gmail.com'){
      return true;
    }
    else {
      return false;
    }
  } 

  function validatePassword(password) {
    if (password == '12345678'){
      return true;
    }
    else {
      return false;
    }
    
  }

  function validateUserLogin(useremail, password) {
    if (validateUser(useremail) && validatePassword(password)) {
      navigate("/"); // Redirect to homepage on successful login
    }else{
      alert("Invalid email or password. Please try again.");
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
        <button type="submit" onClick={() => {validateUserLogin(document.querySelector('input[type="email"]').value, document.querySelector('input[type="password"]').value);}}>Login</button>
      </form>
    </div>
  );
}

export default Login;