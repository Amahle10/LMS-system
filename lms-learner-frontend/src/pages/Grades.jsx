import React from "react";
import "./Grades.css";

const Grades = () => {
  const grades = [
    { course: "React Basics", grade: "A" },
    { course: "Advanced Python", grade: "B+" },
    { course: "UI/UX Design", grade: "A-" },
    { course: "Math 101", grade: "B" },
  ];

  return (
    <div className="grades-page">
      <h1 className="page-title">Grades</h1>
      <div className="grades-grid">
        {grades.map((item, idx) => (
          <div className="grade-card" key={idx}>
            <h3>{item.course}</h3>
            <p>Grade: <strong>{item.grade}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grades;
