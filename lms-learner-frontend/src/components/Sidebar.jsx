import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="sidebar-toggle-button" onClick={toggleSidebar}>
            <i className="bx bx-menu"></i>
          </button>
          <div className="logo">LMS</div>
        </div>

        <ul className="nav-list">
          <li>
            <a href="#">
              <i className="bx bx-grid-alt icon"></i>
              <span className="label">Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bx-book-open icon"></i>
              <span className="label">My Courses</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bx-task icon"></i>
              <span className="label">Assignments</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bx-bar-chart-alt-2 icon"></i>
              <span className="label">Grades</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bx-message-dots icon"></i>
              <span className="label">Messages</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="bx bx-calendar icon"></i>
              <span className="label">Calendar</span>
            </a>
          </li>
        </ul>

        <div className="sidebar-footer">
          <li>
            <a href="#">
              <i className="bx bx-cog icon"></i>
              <span className="label">Settings</span>
            </a>
          </li>

          <li className="profile">
            <img src="https://via.placeholder.com/40" alt="profile" />
            <div className="profile-info">
              <div className="name">Kamva</div>
              <div className="role">Learner</div>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
