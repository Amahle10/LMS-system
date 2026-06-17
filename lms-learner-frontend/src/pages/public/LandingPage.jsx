import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section style={{ padding: "3rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1>EduSphere LMS</h1>
      <p>Multi-school learning platform for students, teachers, parents, and admins.</p>
      <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
        <Link to="/access" style={{ padding: "0.75rem 1rem", background: "#0f172a", color: "white", textDecoration: "none", borderRadius: "6px" }}>
          Login
        </Link>
        <Link to="/features" style={{ padding: "0.75rem 1rem", background: "#e2e8f0", color: "#0f172a", textDecoration: "none", borderRadius: "6px" }}>
          Explore Features
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
