import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { roleMenus } from "../../app/roleRoutes";

const Sidebar = () => {
  const { role, school, user, isAuthenticated } = useAuth();

  const menu = roleMenus[role] || roleMenus.visitor;
  const location = useLocation();

  const roleAccent = {
    admin: "#ef4444",
    teacher: "#3b82f6",
    student: "#22c55e",
    parent: "#f59e0b",
    visitor: "#94a3b8",
  };

  const accent = roleAccent[role] || "#94a3b8";

  const isActive = (path) => location.pathname === path;

  // 🧭 DAY STRUCTURE PANEL (CORE UX)
  const todayPanelByRole = {
    student: [
      { label: "Now", value: "Mathematics · B12" },
      { label: "Next", value: "Break · 10:15 (23 min)" },
      { label: "Lunch", value: "12:30" },
      { label: "Home", value: "14:30" },
    ],

    teacher: [
      { label: "Now", value: "Grade 10 Maths" },
      { label: "Next", value: "Grade 11 Physics" },
      { label: "Grading", value: "14 Pending" },
      { label: "End", value: "15:00 Wrap-up" },
    ],

    parent: [
      { label: "Now", value: "School Session Active" },
      { label: "Next", value: "Break Time" },
      { label: "Messages", value: "3 Unread" },
      { label: "Event", value: "Parent Meeting" },
    ],

    admin: [
      { label: "System", value: "Operational" },
      { label: "Users", value: "128 Online" },
      { label: "Reports", value: "18 Open" },
      { label: "Status", value: "Stable" },
    ],

    visitor: [
      { label: "Welcome", value: "Explore EduSphere" },
      { label: "Schools", value: "Available" },
      { label: "Learning", value: "Ready" },
      { label: "Status", value: "Online" },
    ],
  };

  const todayPanel = todayPanelByRole[role] || todayPanelByRole.student;

  return (
    <aside
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* LOGO */}
      <Link
        to={isAuthenticated ? "/dashboard" : "/"}
        style={{
          textDecoration: "none",
          color: "#fff",
          fontWeight: 800,
          fontSize: "1.15rem",
          marginBottom: "14px",
          letterSpacing: "-0.02em",
        }}
      >
        EduSphere
      </Link>

      {/* SCHOOL INFO */}
      <div
        style={{
          background: "#111827",
          borderRadius: "10px",
          padding: "12px",
          borderLeft: `3px solid ${accent}`,
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            opacity: 0.55,
          }}
        >
          {role}
        </div>

        <div
          style={{
            marginTop: "4px",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          {school || "Demo School"}
        </div>
      </div>

      {/* NAVIGATION */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {menu.map((item) => {
            const active = isActive(item.path);

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    display: "block",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#fff",
                    background: active
                      ? "rgba(255,255,255,0.06)"
                      : "transparent",
                    borderLeft: active
                      ? `2px solid ${accent}`
                      : "2px solid transparent",
                    fontWeight: active ? 600 : 400,
                    transition: "all .15s ease",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 🧭 TODAY TIMELINE PANEL */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          marginTop: "18px",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#111827",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              opacity: 0.55,
            }}
          >
            Today
          </div>

          {todayPanel.map((item, index) => (
            <StatusItem
              key={index}
              label={item.label}
              value={item.value}
              last={index === todayPanel.length - 1}
            />
          ))}
        </div>
      </div>

      {/* USER PROFILE FOOTER */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
              boxShadow: `0 0 0 3px ${accent}20`,
            }}
          >
            {(user?.name || role || "U")[0].toUpperCase()}
          </div>

          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                fontWeight: 600,
                fontSize: "14px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {user?.name || "Student User"}
            </div>

            <div
              style={{
                fontSize: "11px",
                opacity: 0.6,
                textTransform: "capitalize",
              }}
            >
              {role || "visitor"}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <button style={footerBtn}>Settings</button>
          <button style={footerBtn}>Help</button>
        </div>
      </div>
    </aside>
  );
};

/* 🧭 TIMELINE ITEM */
const StatusItem = ({ label, value, last = false }) => (
  <div
    style={{
      padding: "11px 12px",
      borderBottom: last
        ? "none"
        : "1px solid rgba(255,255,255,0.04)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <div
      style={{
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.35)",
        flexShrink: 0,
      }}
    />

    <div>
      <div
        style={{
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          opacity: 0.5,
          marginBottom: "3px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: "13px",
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {value}
      </div>
    </div>
  </div>
);

/* BUTTON STYLE */
const footerBtn = {
  flex: 1,
  background: "#1f2937",
  border: "none",
  color: "#fff",
  borderRadius: "8px",
  padding: "8px",
  cursor: "pointer",
  fontSize: "12px",
};

export default Sidebar;