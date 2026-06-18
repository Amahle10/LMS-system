import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Dashboard.css";

const liveMessagesPool = [
  { type: "info", title: "Upcoming Class", text: "Mathematics starts at 10:00 AM" },
  { type: "update", title: "New Assignment", text: "Algebra Worksheet has been added" },
  { type: "message", title: "Teacher Feedback", text: "Great progress this week" },
  { type: "tip", title: "Study Tip", text: "10 minutes daily improves retention" },
];

const Dashboard = () => {
  const { role, school, user } = useAuth();
  const safeRole = role || "student";

  const [feed, setFeed] = useState([liveMessagesPool[0]]);
  const [chat, setChat] = useState("");
  const [search, setSearch] = useState("");
  const [time, setTime] = useState(new Date());

  const cardsByRole = {
    admin: [
      { title: "Users", count: 128, link: "/dashboard/users", description: "Manage system users." },
      { title: "Reports", count: 18, link: "/dashboard/reports", description: "Analytics reports." },
      { title: "Settings", count: 3, link: "/dashboard/settings", description: "System settings." },
    ],
    teacher: [
      { title: "Classes", count: 6, link: "/dashboard/courses", description: "Your classes." },
      { title: "Assignments", count: 14, link: "/dashboard/assignments", description: "Assignments." },
      { title: "Grades", count: "87%", link: "/dashboard/grades", description: "Student grading." },
    ],
    student: [
      { title: "Courses", count: 5, link: "/dashboard/courses", description: "Your courses." },
      { title: "Assignments", count: 8, link: "/dashboard/assignments", description: "Your tasks." },
      { title: "Grades", count: "76%", link: "/dashboard/grades", description: "Your progress." },
    ],
    parent: [
      { title: "Children", count: 2, link: "/dashboard/courses", description: "Monitor children." },
      { title: "Attendance", count: "96%", link: "/dashboard/calendar", description: "Attendance tracking." },
      { title: "Messages", count: 5, link: "/dashboard/messages", description: "School messages." },
    ],
  };

  const cards = cardsByRole[safeRole] || cardsByRole.student;

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      const next = liveMessagesPool[index % liveMessagesPool.length];
      index++;
      setFeed((prev) => [next, ...prev.slice(0, 4)]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const showInfo = (e, text) => {
    e.preventDefault();
    e.stopPropagation();
    alert(text);
  };

  const sendChat = () => {
    if (!chat.trim()) return;
    setChat("");
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">

        <div className="header-top">
          <h1>
            {safeRole.charAt(0).toUpperCase() + safeRole.slice(1)} Dashboard
          </h1>

          <input
            className="dashboard-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search system..."
          />
        </div>

        <div className="system-strip">
          <div>{time.toLocaleTimeString()}</div>
          <div>{school || "School System"}</div>
        </div>

        <p className="meta">
          Role: {safeRole} • School: {school || "Loading..."}
        </p>

        <p className="welcome">Welcome back, {user?.name || "User"}.</p>
      </div>

      {/* CARDS */}
      <div className="cards-container">
        {cards.map((card, idx) => (
          <Link key={idx} to={card.link} className="dashboard-card">

            <h2>{card.count}</h2>
            <p>{card.title}</p>

            <button
              className="info-btn"
              onClick={(e) => showInfo(e, card.description)}
            >
              i
            </button>

          </Link>
        ))}
      </div>

      {/* TODAY */}
      <section className="today-section">
        <h2>Today at a glance</h2>

        <div className="today-grid">

          <div className="today-card">
            <h3>Learning Focus</h3>
            <p>Mathematics & Science</p>
          </div>

          <div className="today-card">
            <h3>Assignments</h3>
            <p>2 due soon</p>
          </div>

          <div className="today-card">
            <h3>Progress</h3>
            <p>76%</p>
          </div>

          <div className="today-card">
            <h3>Messages</h3>
            <p>1 new update</p>
          </div>

        </div>
      </section>

      {/* LIVE FEED */}
      <section className="live-feed">
        <h2>Live Updates</h2>

        <div className="feed-container">
          {Array.from({ length: 4 }).map((_, i) => {
            const item = feed[i];

            return (
              <div key={i} className={`feed-card ${item?.type || "empty"}`}>
                <div className="feed-dot" />
                <div>
                  <div className="feed-title">{item?.title || "No update"}</div>
                  <div className="feed-text">{item?.text || "Waiting..."}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CHAT */}
      <div className="quick-chat">
        <input
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendChat}>Send</button>
      </div>

    </div>
  );
};

export default Dashboard;