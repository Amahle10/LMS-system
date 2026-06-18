import React, { useMemo, useState } from "react";
import "./Messages.css";

const Messages = () => {
  const [selected, setSelected] = useState(null);
  const [reply, setReply] = useState("");
  const [tab, setTab] = useState("inbox");

  const messages = [
    {
      id: 1,
      sender: "Jane Doe",
      subject: "React Hooks Help",
      body: "Can you explain useEffect dependency arrays clearly?",
      date: "2025-11-10",
      course: "React Basics",
      type: "course",
      read: false,
      canReply: true,
      pinned: true,
      replies: [
        { from: "Teacher", text: "Yes, think of it as a sync trigger array." }
      ],
    },
    {
      id: 2,
      sender: "System",
      subject: "Assignment Deadline Update",
      body: "Your Python assignment deadline has been extended.",
      date: "2025-11-09",
      course: "Python",
      type: "system",
      read: true,
      canReply: false,
      pinned: true,
      replies: [],
    },
    {
      id: 3,
      sender: "Alice Lee",
      subject: "UI Feedback Request",
      body: "Please review my latest UI submission.",
      date: "2025-11-08",
      course: "UI/UX",
      type: "course",
      read: true,
      canReply: true,
      pinned: false,
      replies: [],
    },
    {
      id: 4,
      sender: "School Admin",
      subject: "Notice: Exam Schedule",
      body: "Final exams start next week. Check timetable.",
      date: "2025-11-07",
      course: "General",
      type: "system",
      read: true,
      canReply: false,
      pinned: false,
      replies: [],
    },
  ];

  const filteredMessages = useMemo(() => {
    if (tab === "pinned") return messages.filter(m => m.pinned);
    if (tab === "courses") return messages.filter(m => m.type === "course");
    if (tab === "system") return messages.filter(m => m.type === "system");
    return messages;
  }, [tab]);

  const selectedMessage = messages.find(m => m.id === selected);

  const sendReply = () => {
    if (!reply.trim()) return;
    alert(`Reply sent: ${reply}`);
    setReply("");
  };

  return (
    <div className="messages-page">

      {/* HEADER */}
      <div className="messages-header">
        <div>
          <h1>Messages</h1>
          <p className="subtitle">School communication hub</p>
        </div>

        <div className="tabs">
          {["inbox", "pinned", "courses", "system"].map((t) => (
            <button
              key={t}
              className={tab === t ? "active-tab" : ""}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="messages-layout">

        {/* LIST */}
        <div className="messages-list">

          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`message-card ${selected === msg.id ? "active" : ""}`}
              onClick={() => setSelected(msg.id)}
            >

              <div className="top-row">
                <span>{msg.sender}</span>
                <span>{msg.date}</span>
              </div>

              <div className="subject">{msg.subject}</div>

              <div className="meta-row">
                <span className="chip">{msg.course}</span>
                {msg.pinned && <span className="pin">Pinned</span>}
                {!msg.canReply && <span className="readonly">Read Only</span>}
              </div>

              <div className="preview">{msg.body.slice(0, 60)}...</div>

              {!msg.read && <div className="dot" />}
            </div>
          ))}
        </div>

        {/* VIEWER */}
        <div className="message-viewer">

          {selectedMessage ? (
            <>
              <div className="viewer-header">
                <h2>{selectedMessage.subject}</h2>
                <div className="viewer-meta">
                  From {selectedMessage.sender} • {selectedMessage.course}
                </div>
              </div>

              <div className="viewer-body">
                {selectedMessage.body}
              </div>

              {/* REPLIES */}
              <div className="reply-thread">
                <h4>Replies</h4>

                {selectedMessage.replies.map((r, i) => (
                  <div key={i} className="reply">
                    <strong>{r.from}</strong>: {r.text}
                  </div>
                ))}
              </div>

              {/* REPLY BOX */}
              {selectedMessage.canReply ? (
                <div className="reply-box">
                  <input
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Write a reply..."
                  />
                  <button onClick={sendReply}>Send</button>
                </div>
              ) : (
                <div className="readonly-note">
                  This message is read-only
                </div>
              )}
            </>
          ) : (
            <div className="empty-state">
              Select a message to view
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Messages;