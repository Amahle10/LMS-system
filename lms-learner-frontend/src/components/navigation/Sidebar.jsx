import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { roleMenus } from "../../app/roleRoutes";

const Sidebar = () => {
  const { role, school, isAuthenticated } = useAuth();
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

      {/* STATIC LIVE STATUS PANEL */}
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
            Live Status
          </div>

          <StatusItem
            label="Current Status"
            value="School In Session"
          />

          <StatusItem
            label="Next Event"
            value="Break · 10 min"
          />

          <StatusItem
            label="Next Class"
            value="Mathematics · B12"
          />

          <StatusItem
            label="Active Notice"
            value="Physics moved to Lab 1"
          />

          <StatusItem
            label="Last Update"
            value="09:43"
            last
          />
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "12px",
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
          Account
        </div>

        <div
          style={{
            marginTop: "4px",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {role || "visitor"}
        </div>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "8px",
          }}
        >
          <button style={footerBtn}>Settings</button>
          <button style={footerBtn}>Help</button>
        </div>
      </div>
    </aside>
  );
};

const StatusItem = ({ label, value, last = false }) => (
  <div
    style={{
      padding: "11px 12px",
      borderBottom: last
        ? "none"
        : "1px solid rgba(255,255,255,0.04)",
    }}
  >
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
);

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