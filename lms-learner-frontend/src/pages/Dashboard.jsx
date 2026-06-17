import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Dashboard.css";

const liveMessagesPool = [
  { type: "info", text: "You have a class at 10:00 AM - Mathematics" },
  { type: "update", text: "New assignment added: Algebra Worksheet" },
  { type: "message", text: "Teacher: Great progress this week 👏" },
  { type: "tip", text: "Tip: 10 minutes daily improves retention" },
];

const Dashboard = () => {
  const { role, school, user } = useAuth();

  const safeRole = role || "student";

  const [feed, setFeed] = useState([liveMessagesPool[0]]);
  const [chat, setChat] = useState("");

  const cardsByRole = {
    admin: [
      { title: "Users", count: 128, color: "#6C63FF", link: "/dashboard/users" },
      { title: "Reports", count: 18, color: "#FF6584", link: "/dashboard/reports" },
      { title: "Settings", count: "3", color: "#1ABC9C", link: "/dashboard/settings" },
    ],
    teacher: [
      { title: "Classes", count: 6, color: "#6C63FF", link: "/dashboard/courses" },
      { title: "Assignments", count: 14, color: "#FF6584", link: "/dashboard/assignments" },
      { title: "Grades", count: "87%", color: "#1ABC9C", link: "/dashboard/grades" },
    ],
    student: [
      { title: "Courses", count: 5, color: "#6C63FF", link: "/dashboard/courses" },
      { title: "Assignments", count: 8, color: "#FF6584", link: "/dashboard/assignments" },
      { title: "Grades", count: "76%", color: "#1ABC9C", link: "/dashboard/grades" },
    ],
    parent: [
      { title: "Children", count: 2, color: "#6C63FF", link: "/dashboard/courses" },
      { title: "Attendance", count: "96%", color: "#FF6584", link: "/dashboard/calendar" },
      { title: "Messages", count: 5, color: "#1ABC9C", link: "/dashboard/messages" },
    ],
  };

  const cards = cardsByRole[safeRole] || cardsByRole.student;

  // 🔄 LIVE FEED LOOP (makes UI feel alive)
  useEffect(() => {
    let index = 1;

    const interval = setInterval(() => {
      const next = liveMessagesPool[index % liveMessagesPool.length];
      index++;

      setFeed((prev) => [next, ...prev.slice(0, 4)]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const sendChat = () => {
    if (!chat.trim()) return;
    console.log("Quick chat:", chat);
    setChat("");
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>
          {safeRole === "admin"
            ? "Admin Home"
            : safeRole === "teacher"
            ? "Teacher Home"
            : safeRole === "student"
            ? "Student Home"
            : "Parent Home"}
        </h1>

        <p>
          <strong>Role:</strong> {safeRole} &nbsp;|&nbsp;
          <strong>School:</strong> {school || "Loading..."}
        </p>

        <p>Welcome back, {user?.name || "Student User"}.</p>
      </div>

      {/* QUICK CARDS */}
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

      {/* 🌤️ TODAY SECTION */}
      <section className="dashboard-today">
        <h2>Today at a glance</h2>

        <p className="today-subtext">
          Your learning flow is steady — here’s what’s active right now.
        </p>

        <div className="today-grid">

          <div className="today-card blue">
            <h3>📚 Learning Focus</h3>
            <p>Mathematics & Science</p>
            <span>Steady progress this week</span>
          </div>

          <div className="today-card pink">
            <h3>📝 Assignments</h3>
            <p>2 due soon</p>
            <span>One already started</span>
          </div>

          <div className="today-card green">
            <h3>🎯 Progress</h3>
            <p>76%</p>
            <span>You're improving consistently</span>
          </div>

          <div className="today-card yellow">
            <h3>💬 Messages</h3>
            <p>1 new update</p>
            <span>From your teacher</span>
          </div>

        </div>
      </section>

      {/* 🔥 LIVE FEED (NEW “ALIVE” LAYER) */}
      <section className="live-feed">
        <h2>Live Updates</h2>

        <div className="feed-container">
          {feed.map((item, i) => (
            <div key={i} className={`feed-card ${item.type}`}>
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* 💬 QUICK CHAT */}
      <div className="quick-chat">
        <input
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Ask something... (e.g. assignments, schedule)"
        />
        <button onClick={sendChat}>Send</button>
      </div>

    </div>
  );
};

export default Dashboard;