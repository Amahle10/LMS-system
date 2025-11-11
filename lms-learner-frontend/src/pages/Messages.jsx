import React from "react";
import "./Messages.css";

const Messages = () => {
  const messages = [
    { sender: "Jane Doe", subject: "React Basics Question", date: "2025-11-10" },
    { sender: "John Smith", subject: "Python Assignment Update", date: "2025-11-09" },
    { sender: "Alice Lee", subject: "UI/UX Feedback", date: "2025-11-08" },
  ];

  return (
    <div className="messages-page">
      <h1 className="page-title">Messages</h1>
      <ul className="messages-list">
        {messages.map((msg, idx) => (
          <li key={idx} className="message-item">
            <strong>{msg.sender}</strong> - {msg.subject} <span>{msg.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
