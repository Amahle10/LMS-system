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

  const btn = {
    width: "100%",
    background: "#1f2937",
    color: "#fff",
    border: "none",
    padding: "9px",
    borderRadius: "7px",
    cursor: "pointer",
    marginBottom: "6px",
    fontSize: "0.9rem",
  };

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
        fontSize: "14px",
      }}
    >
      {/* HEADER */}
      <Link
        to={isAuthenticated ? "/dashboard" : "/"}
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: "1.2rem",
          marginBottom: "14px",
        }}
      >
        EduSphere
      </Link>

      {/* ROLE BLOCK */}
      <div
        style={{
          padding: "10px",
          background: "#111827",
          borderRadius: "10px",
          borderLeft: `4px solid ${accent}`,
          marginBottom: "12px",
        }}
      >
        <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>{role}</div>
        <div style={{ fontSize: "1rem", fontWeight: 600 }}>
          {school || "Demo School"}
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          margin: "6px 0 10px 0",
        }}
      />

      {/* NAV */}
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
                    padding: "10px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: active ? 600 : 400,
                    background: active ? "#1f2937" : "transparent",
                    transform: active ? "translateX(2px)" : "none",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1f2937";
                    e.currentTarget.style.transform = "translateX(3px)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateX(0px)";
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 🧠 LIVE SCHOOL INFO PANEL */}
      <div
        style={{
          flex: 1,
          marginTop: "12px",
          marginBottom: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* CURRENT STATUS */}
        <div
          style={{
            background: "#111827",
            borderRadius: "10px",
            padding: "10px",
            borderLeft: "3px solid #22c55e",
          }}
        >
          <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>
            Current Status
          </div>

          <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
            🟢 School in session
          </div>

          <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>
            Next break in: <b>10 min</b>
          </div>
        </div>

        {/* NEXT CLASS */}
        <div
          style={{
            background: "#0b1220",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>
            Next Class
          </div>

          <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
            📚 Mathematics (Room B12)
          </div>

          <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            Starts in 12 min • Teacher: Mr. Dlamini
          </div>
        </div>

        {/* ALERTS */}
        <div
          style={{
            background: "#1a1111",
            border: "1px solid rgba(239,68,68,0.25)",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>
            Alerts
          </div>

          <div style={{ fontSize: "0.85rem", color: "#fca5a5" }}>
            ⚠️ Physics teacher absent
          </div>

          <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>
            Class moved to Lab 1 (self-study)
          </div>
        </div>

        {/* NAVIGATION HELP */}
        <div
          style={{
            background: "#111827",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>
            Navigation
          </div>

          <div style={{ fontSize: "0.85rem" }}>
            📍 Current area: Block C
          </div>

          <div style={{ fontSize: "0.85rem" }}>
            🧭 Next room: B12 (2 min walk)
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "10px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
        >
          <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
            Signed in as
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>
            {role || "visitor"}
          </div>
        </div>

        <button style={btn}>Settings</button>
        <button style={btn}>Help</button>
        <button style={{ ...btn, background: "#ef4444" }}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;