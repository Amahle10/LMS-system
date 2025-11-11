import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    { title: "React Basics", instructor: "Jane Doe", progress: "50%" },
    { title: "Advanced Python", instructor: "John Smith", progress: "30%" },
    { title: "UI/UX Design", instructor: "Alice Lee", progress: "75%" },
    { title: "Math 101", instructor: "Prof. Brown", progress: "90%" },
  ];

  return (
    <div className="courses-page">
      <h1 className="page-title">My Courses</h1>

      <div className="courses-grid">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Progress: {course.progress}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
