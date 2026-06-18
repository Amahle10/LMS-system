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

      {/* HEADER */}
      <div className="profile-header">
        <div>
          <h1>Profile</h1>
          <p className="subtitle">Your account identity and system access</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* PROFILE CARD */}
      <div className="profile-card">

        <div className="profile-top">
          <img
            className="avatar"
            src="https://via.placeholder.com/120"
            alt="profile"
          />

          <div className="profile-meta">
            <h2>{user?.name || "User"}</h2>
            <span className="role-badge">
              {user?.role || "visitor"}
            </span>

            <p className="email">{user?.email || "user@example.com"}</p>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="info-grid">
          <div className="info-item">
            <span className="label">School</span>
            <span className="value">{user?.school || "Demo School"}</span>
          </div>

          <div className="info-item">
            <span className="label">Joined</span>
            <span className="value">{user?.joined || "2025-01-15"}</span>
          </div>

          <div className="info-item">
            <span className="label">Status</span>
            <span className="value active">Active</span>
          </div>

          <div className="info-item">
            <span className="label">Access Level</span>
            <span className="value">Standard</span>
          </div>
        </div>

        {/* ACTIVITY SECTION */}
        <div className="activity-box">
          <h3>Recent Activity</h3>

          <div className="activity-item">
            Logged into dashboard
          </div>
          <div className="activity-item">
            Viewed course: React Basics
          </div>
          <div className="activity-item">
            Submitted assignment: Math 101
          </div>
        </div>

        {/* SETTINGS STRIP */}
        <div className="profile-actions">
          <button className="secondary-btn">Edit Profile</button>
          <button className="secondary-btn">Privacy Settings</button>
        </div>

      </div>
    </div>
  );
};

export default Profile;