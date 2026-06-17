import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Sidebar.css";

const Sidebar = () => {
  const { role } = useAuth();

  const safeRole = role || "student";

  const navByRole = {
    admin: [
      { label: "Overview", path: "/dashboard" },
      { label: "Users", path: "/dashboard/users" },
      { label: "Settings", path: "/dashboard/settings" },
      { label: "Reports", path: "/dashboard/reports" },
    ],
    teacher: [
      { label: "Today", path: "/dashboard" },
      { label: "Classes", path: "/dashboard/classes" },
      { label: "Assignments", path: "/dashboard/assignments" },
      { label: "Grades", path: "/dashboard/grades" },
    ],
    student: [
      { label: "Today", path: "/dashboard" },
      { label: "Courses", path: "/dashboard/courses" },
      { label: "Assignments", path: "/dashboard/assignments" },
      { label: "Progress", path: "/dashboard/progress" },
    ],
    parent: [
      { label: "Overview", path: "/dashboard" },
      { label: "Children", path: "/dashboard/children" },
      { label: "Messages", path: "/dashboard/messages" },
    ],
  };

  const nav = navByRole[safeRole] || navByRole.student;

  return (
    <div className="sidebar">
      <h2 className="logo">LMS</h2>

      <div className="nav">
        {nav.map((item, idx) => (
          <Link key={idx} to={item.path} className="nav-item">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;