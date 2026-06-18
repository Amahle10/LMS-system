import React, { useMemo, useState } from "react";
import "./Courses.css";

const Courses = () => {
  const [search, setSearch] = useState("");

  const courses = useMemo(
    () => [
      {
        title: "React Basics",
        instructor: "Jane Doe",
        status: "in-progress",
        participation: [40, 55, 50, 60, 58, 65],
        activity: { type: "Homework", status: "incomplete" },
      },
      {
        title: "Advanced Python",
        instructor: "John Smith",
        status: "low",
        participation: [60, 50, 45, 40, 35, 30],
        activity: { type: "Project", status: "in-progress" },
      },
      {
        title: "UI/UX Design",
        instructor: "Alice Lee",
        status: "high",
        participation: [30, 45, 55, 70, 80, 75],
        activity: { type: "Classwork", status: "complete" },
      },
      {
        title: "Math 101",
        instructor: "Prof. Brown",
        status: "excellent",
        participation: [80, 82, 85, 88, 90, 92],
        activity: { type: "Quiz Prep", status: "in-progress" },
      },
    ],
    []
  );

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const getStateLabel = (status) => {
    switch (status) {
      case "excellent":
        return "Excellent";
      case "high":
        return "Strong";
      case "in-progress":
        return "Active";
      case "low":
        return "At Risk";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="courses-page">

      <div className="courses-header">
        <h1>Courses</h1>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="course-search"
        />
      </div>

      <div className="courses-layout">

        {/* LEFT */}
        <div className="courses-list">
          {filtered.map((course, idx) => (
            <div className="course-card" key={idx}>

              <div className="course-top">
                <div>
                  <h2>{course.title}</h2>
                  <p className="muted">{course.instructor}</p>
                </div>

                <span className={`status ${course.status}`}>
                  {getStateLabel(course.status)}
                </span>
              </div>

              {/* META (clean separation block) */}
              <div className="course-meta">
                <div className="meta-item">
                  <span className="label">Activity</span>
                  <span className={`pill ${course.activity.status}`}>
                    {course.activity.type}
                  </span>
                </div>

                <div className="meta-item">
                  <span className="label">Status</span>
                  <span className="muted">
                    {course.activity.status}
                  </span>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="actions">
                <button>Continue Learning</button>
                <button className="ghost">Notes</button>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="analytics">

          <h2>Learning Intelligence</h2>

          <div className="panel">
            <h3>Participation Trend</h3>

            <svg viewBox="0 0 100 40" className="chart">
              <polyline
                fill="none"
                stroke="#6C63FF"
                strokeWidth="2"
                points="0,30 20,20 40,25 60,15 80,18 100,10"
              />
            </svg>

            <p className="muted">
              Engagement tracking across learning cycles.
            </p>
          </div>

          <div className="panel">
            <h3>Summary</h3>

            <div className="stat">
              <span>Total Courses</span>
              <b>{courses.length}</b>
            </div>

            <div className="stat">
              <span>Strong Performance</span>
              <b>2</b>
            </div>

            <div className="stat">
              <span>At Risk</span>
              <b>1</b>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Courses;