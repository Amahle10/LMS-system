import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 1.5rem", background: "#f5f5f5" }}>
      <Link to="/" style={{ fontWeight: 700, textDecoration: "none" }}>EduSphere</Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/access">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
