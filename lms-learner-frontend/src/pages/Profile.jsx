import React from "react";
import "./Profile.css";
import { Route } from "react-router-dom";
import Login from "./LoginPage";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Kamva",
    role: "Learner",
    email: "kamva@example.com",
    joined: "2025-01-15",
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">Profile</h1>
      <Link  to="/Login" onClick={() => {
        // Clear user session or token here if needed
        console.log("User logged out");
        }}>
      <div>
        <h2>Logout</h2>
      </div>
      </Link>
      <div className="profile-card">
        <img src="https://via.placeholder.com/100" alt="profile" />
        <h2>{user.name}</h2>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
        <p>Joined: {user.joined}</p>
      </div>
    </div>
  );
};

export default Profile;
