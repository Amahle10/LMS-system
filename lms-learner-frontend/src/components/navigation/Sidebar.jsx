import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { roleMenus } from "../../app/roleRoutes";

const Sidebar = () => {
  const { role, school, isAuthenticated } = useAuth();
  const menu = roleMenus[role] || roleMenus.visitor;

  return (
    <aside style={{ width: "260px", minHeight: "100vh", background: "#0f172a", color: "#fff", padding: "1rem 0.9rem" }}>
      <Link to={isAuthenticated ? "/dashboard" : "/"} style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "1rem", fontWeight: 700 }}>
        EduSphere
      </Link>
      <div style={{ marginBottom: "1rem", padding: "0.75rem", background: "#111827", borderRadius: "8px" }}>
        <div style={{ fontSize: "0.85rem", textTransform: "capitalize", opacity: 0.8 }}>{role}</div>
        <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{school || "Demo School"}</div>
      </div>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menu.map((item) => (
            <li key={item.path} style={{ marginBottom: "0.45rem" }}>
              <Link to={item.path} style={{ color: "#fff", textDecoration: "none", display: "block", padding: "0.6rem 0.75rem", borderRadius: "6px" }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
