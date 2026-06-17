import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const quickAccess = [
    { title: "Dashboard", icon: "bx bx-grid-alt", link: "/dashboard" },
    { title: "My Courses", icon: "bx bx-book-open", link: "/courses" },
    { title: "Assignments", icon: "bx bx-task", link: "/assignments" },
    { title: "Calendar", icon: "bx bx-calendar", link: "/calendar" },
  ];

  const recentActivity = [
    { activity: "Submitted Assignment 1", course: "Math 101" },
    { activity: "New grade released", course: "Physics 201" },
    { activity: "Course Material Updated", course: "History 101" },
  ];

  const featuredCourses = [
    { title: "React Basics", instructor: "Jane Doe" },
    { title: "Advanced Python", instructor: "John Smith" },
    { title: "UI/UX Design", instructor: "Alice Lee" },
  ];

  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome back, Kamva!</h1>
        <p>Here’s a quick overview of your learning activities.</p>
      </section>

      <section className="quick-access">
        {quickAccess.map((item, idx) => (
          <Link to={item.link} key={idx} className="card">
            <i className={`bx ${item.icon} icon`}></i>
            <span>{item.title}</span>
          </Link>
        ))}
      </section>

      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {recentActivity.map((item, idx) => (
            <li key={idx}>
              <strong>{item.activity}</strong> - {item.course}
            </li>
          ))}
        </ul>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {featuredCourses.map((course, idx) => (
            <div className="course-card" key={idx}>
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
