import React, { useState } from "react";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section style={{ maxWidth: "640px" }}>
      <h1>Settings</h1>
      <div style={{ display: "grid", gap: "0.75rem", background: "#fff", padding: "1rem", borderRadius: "10px" }}>
        <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Email notifications</span>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
        </label>
        <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Dark mode</span>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </label>
        <button style={{ padding: "0.7rem", background: "#0f172a", color: "#fff", border: "none", borderRadius: "6px" }}>
          Save settings
        </button>
      </div>
    </section>
  );
};

export default SettingsPage;
