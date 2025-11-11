import React from "react";
import { Link } from "react-router-dom"; // For navigation links
import "./Dashboard.css";

const Dashboard = () => {
  const cards = [
    {
      title: "Courses",
      count: 12,
      color: "#6C63FF",
      link: "/courses",
    },
    {
      title: "Assignments",
      count: 8,
      color: "#FF6584",
      link: "/assignments",
    },
    {
      title: "Progress",
      count: "75%",
      color: "#1ABC9C",
      link: "/progress",
    },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="cards-container">
        {cards.map((card, idx) => (
          <Link
            to={card.link}
            key={idx}
            className="dashboard-card"
            style={{ backgroundColor: card.color }}
          >
            <h2>{card.count}</h2>
            <p>{card.title}</p>
          </Link>
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
