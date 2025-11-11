import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const cards = [
    {
      title: "Courses",
      count: 12,
      color: "#6C63FF",
    },
    {
      title: "Assignments",
      count: 8,
      color: "#FF6584",
    },
    {
      title: "Progress",
      count: "75%",
      color: "#1ABC9C",
    },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="cards-container">
        {cards.map((card, idx) => (
          <div
            className="dashboard-card"
            key={idx}
            style={{ backgroundColor: card.color }}
          >
            <h2>{card.count}</h2>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
      <section className="dashboard-content">
        <h2>Welcome back!</h2>
        <p>Here’s a quick overview of your LMS activities.</p>
      </section>
    </div>
  );
};

export default Dashboard;
