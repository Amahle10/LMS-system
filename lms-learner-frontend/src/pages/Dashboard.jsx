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
      {
        title: "Users",
        count: 128,
        color: "#6C63FF",
        link: "/dashboard/users",
        description: "Manage all system users, roles, and permissions.",
      },
      {
        title: "Reports",
        count: 18,
        color: "#FF6584",
        link: "/dashboard/reports",
        description: "View system analytics and performance reports.",
      },
      {
        title: "Settings",
        count: 3,
        color: "#1ABC9C",
        link: "/dashboard/settings",
        description: "Configure system settings and preferences.",
      },
    ],

    teacher: [
      {
        title: "Classes",
        count: 6,
        color: "#6C63FF",
        link: "/dashboard/courses",
        description: "Manage your active classes and schedules.",
      },
      {
        title: "Assignments",
        count: 14,
        color: "#FF6584",
        link: "/dashboard/assignments",
        description: "Create and review student assignments.",
      },
      {
        title: "Grades",
        count: "87%",
        color: "#1ABC9C",
        link: "/dashboard/grades",
        description: "Track student performance and grading.",
      },
    ],

    student: [
      {
        title: "Courses",
        count: 5,
        color: "#6C63FF",
        link: "/dashboard/courses",
        description: "Access your enrolled learning courses.",
      },
      {
        title: "Assignments",
        count: 8,
        color: "#FF6584",
        link: "/dashboard/assignments",
        description: "View and submit your assignments.",
      },
      {
        title: "Grades",
        count: "76%",
        color: "#1ABC9C",
        link: "/dashboard/grades",
        description: "Check your academic progress.",
      },
    ],

    parent: [
      {
        title: "Children",
        count: 2,
        color: "#6C63FF",
        link: "/dashboard/courses",
        description: "Monitor your children’s academic activity.",
      },
      {
        title: "Attendance",
        count: "96%",
        color: "#FF6584",
        link: "/dashboard/calendar",
        description: "Track attendance records.",
      },
      {
        title: "Messages",
        count: 5,
        color: "#1ABC9C",
        link: "/dashboard/messages",
        description: "View school communication.",
      },
    ],
  };

  const cards = cardsByRole[safeRole] || cardsByRole.student;

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      const next = liveMessagesPool[index % liveMessagesPool.length];
      index++;
      setFeed((prev) => [next, ...prev.slice(0, 4)]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sendChat = () => {
    if (!chat.trim()) return;
    setChat("");
  };

  const showInfo = (e, text) => {
    e.preventDefault();
    e.stopPropagation();
    window.alert(text || "No description available.");
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <div className="header-top">
          <h1>
            {safeRole === "admin"
              ? "Admin Home"
              : safeRole === "teacher"
              ? "Teacher Home"
              : safeRole === "student"
              ? "Student Home"
              : "Parent Home"}
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
          <strong>Role:</strong> {safeRole} |{" "}
          <strong>School:</strong> {school || "Loading..."}
        </p>

        <p>Welcome back, {user?.name || "Student User"}.</p>
      </div>

      {/* CARDS */}
      <div className="cards-container">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            to={card.link}
            className="dashboard-card"
            style={{ backgroundColor: card.color }}
          >
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
      <section className="dashboard-today">
        <h2>Today at a glance</h2>

        <div className="today-grid">

          <div className="today-card blue">
            <h3>Learning Focus</h3>
            <p>Mathematics & Science</p>
            <button className="info-btn"
              onClick={(e) =>
                showInfo(e, "Your current learning focus areas based on curriculum plan.")
              }
            >
              i
            </button>
          </div>

          <div className="today-card pink">
            <h3>Assignments</h3>
            <p>2 due soon</p>
            <button className="info-btn"
              onClick={(e) =>
                showInfo(e, "Assignments due soon that need attention.")
              }
            >
              i
            </button>
          </div>

          <div className="today-card green">
            <h3>Progress</h3>
            <p>76%</p>
            <button className="info-btn"
              onClick={(e) =>
                showInfo(e, "Your academic performance overview.")
              }
            >
              i
            </button>
          </div>

          <div className="today-card yellow">
            <h3>Messages</h3>
            <p>1 new update</p>
            <button className="info-btn"
              onClick={(e) =>
                showInfo(e, "Latest school messages and notifications.")
              }
            >
              i
            </button>
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
                  <div className="feed-title">
                    {item?.title || "No update"}
                  </div>
                  <div className="feed-text">
                    {item?.text || "Waiting for system activity..."}
                  </div>
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