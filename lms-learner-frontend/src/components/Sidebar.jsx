import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Navigation links array for clean rendering


  const menuItems = [
    { to: "/", icon: "bx-home", label: "Homepage" },
    { to: "/dashboard", icon: "bx-grid-alt", label: "Dashboard" },
    { to: "/courses", icon: "bx-book-open", label: "My Courses" },
    { to: "/assignments", icon: "bx-task", label: "Assignments" },
    { to: "/grades", icon: "bx-bar-chart-alt-2", label: "Grades" },
    { to: "/messages", icon: "bx-message-dots", label: "Messages" },
    { to: "/calendar", icon: "bx-calendar", label: "Calendar" },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Header Logo */}
        <div className="sidebar-header">
          <div className="logo-container">
            <i className="bx bx-layer logo-icon"></i>
            <span className="logo-text">{isOpen && "LMS"}</span>
          </div>
        </div>

        {/* Main Navigation */}
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={toggleSidebar}>
                <i className={`bx ${item.icon} icon`}></i>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Profile & Settings */}
        <div className="sidebar-footer">
          <ul className="nav-list">
            <li className="profile-container">
              <div className="profile-wrapper">
                <Link to="/profile" onClick={toggleSidebar}>
                {/* <i className="bx bx-cog icon"></i> */}

                  {/* Fixed placeholder URL utilizing clean avatar silhouette api */}
                  <img 
                    src="https://ui-avatars.com" 
                    alt="User Profile" 
                    className="profile-avatar tiktok-style" 
                  />
                {isOpen && (
                  <div className="profile-info">
                    <div className="name">Kamva</div>
                    <div className="role">Learner</div>
                  </div>
                )}
                </Link>
              </div>
            </li>

            <li>
              <Link to="/settings" onClick={toggleSidebar}>
                <i className="bx bx-cog icon"></i>
                <span className="label">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
      </button>
    </>
  );
};

export default Sidebar;
