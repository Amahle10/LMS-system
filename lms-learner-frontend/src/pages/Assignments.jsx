import React from "react";
import "./Assignments.css";

const Assignments = () => {
  const assignments = [
    { title: "Assignment 1", course: "React Basics", dueDate: "2025-11-20" },
    { title: "Assignment 2", course: "Python Advanced", dueDate: "2025-11-22" },
    { title: "UI/UX Project", course: "UI/UX Design", dueDate: "2025-11-25" },
  ];

  return (
    <div className="assignments-page">
      <h1 className="page-title">Assignments</h1>
      <div className="assignments-grid">
        {assignments.map((item, idx) => (
          <div className="assignment-card" key={idx}>
            <h3>{item.title}</h3>
            <p>Course: {item.course}</p>
            <p>Due: {item.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
