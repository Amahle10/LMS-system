import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Sidebar header / logo */}
        <div className="sidebar-header" style={{marginBottom: "50px"  }}>
          <div className="logo">{isOpen && "LMS"}</div>
        </div>

        {/* Navigation list */}
        <ul className="nav-list">

          <li>
            <Link to="/" onClick={toggleSidebar}>
              <i className="bx bx-home icon"></i>
              <span className="label">Homepage</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard" onClick={toggleSidebar}>
              <i className="bx bx-grid-alt icon"></i>
              <span className="label">Dashboard</span>
            </Link>
          </li>


          <li>
            <Link to="/courses" onClick={toggleSidebar}>
              <i className="bx bx-book-open icon"></i>
              <span className="label">My Courses</span>
            </Link>
          </li>

          <li>
            <Link to="/assignments" onClick={toggleSidebar}>
              <i className="bx bx-task icon"></i>
              <span className="label">Assignments</span>
            </Link>
          </li>

          <li>
            <Link to="/grades" onClick={toggleSidebar}>
              <i className="bx bx-bar-chart-alt-2 icon"></i>
              <span className="label">Grades</span>
            </Link>
          </li>

          <li>
            <Link to="/messages" onClick={toggleSidebar}>
              <i className="bx bx-message-dots icon"></i>
              <span className="label">Messages</span>
            </Link>
          </li>

          <li>
            <Link to="/calendar" onClick={toggleSidebar}>
              <i className="bx bx-calendar icon"></i>
              <span className="label">Calendar</span>
            </Link>
          </li>
        </ul>

        {/* Sidebar footer */}
        <div className="sidebar-footer">
          <ul className="nav-list">


            {/* <li className="profile"> */}
            <li> 
              <div className='profile-image-and-username' style={{display: 'flex', gap: '10px', alignItems: 'center'}}>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                { < img src="https://placehold.co" alt="User Profile Picture" class="profile-avatar" />}

              </div>
              {isOpen && (
                <div className="profile-info">
                  <div className="name">Kamva</div>
                  <div className="role">Learner</div>
                </div>
                )}
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

      {/* Toggle button */}
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
      </button>
    </>
  );
};

export default Sidebar;
