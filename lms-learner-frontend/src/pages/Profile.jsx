import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">Profile</h1>
      <button
        onClick={handleLogout}
        style={{ padding: "0.7rem 1rem", marginBottom: "1rem", background: "#0f172a", color: "#fff", border: "none", borderRadius: "6px" }}
      >
        Logout
      </button>
      <div className="profile-card" style={{ maxWidth: "520px", padding: "1.5rem", background: "#fff", borderRadius: "12px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
        <img src="https://via.placeholder.com/100" alt="profile" style={{ borderRadius: "50%", marginBottom: "1rem" }} />
        <h2>{user?.name || "User"}</h2>
        <p><strong>Role:</strong> {user?.role || "visitor"}</p>
        <p><strong>School:</strong> {user?.school || "Demo School"}</p>
        <p><strong>Email:</strong> {user?.email || "user@example.com"}</p>
        <p><strong>Joined:</strong> {user?.joined || "2025-01-15"}</p>
      </div>
    </div>
  );
};

export default Profile;
