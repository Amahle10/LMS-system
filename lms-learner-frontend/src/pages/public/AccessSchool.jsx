import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AccessSchool = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const { setSchoolContext } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = url.trim();
    if (!trimmed) return;

    try {
      const parsed = new URL(trimmed);
      const host = parsed.hostname.toLowerCase();
      const parts = host.split(".");
      const role = parts[0];
      const school = parts.slice(1).join(".").replace(/\.com|\.org|\.edu|\.net|\.io/g, "");
      const validRoles = ["admin", "teacher", "student", "parent"];

      if (!validRoles.includes(role) || !school) {
        alert("Please enter a valid school URL such as https://teacher.school-a.com");
        return;
      }

      setSchoolContext(school, role);
      navigate("/login");
    } catch {
      alert("Please enter a full URL such as https://teacher.school-a.com");
    }
  };

  return (
    <section style={{ padding: "2rem", maxWidth: "560px", margin: "0 auto" }}>
      <h1>School Access</h1>
      <p>Enter the school URL to continue.</p>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem" }}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://teacher.school-a.com"
          style={{ padding: "0.8rem" }}
        />
        <button type="submit" style={{ padding: "0.8rem" }}>
          Continue
        </button>
      </form>
    </section>
  );
};

export default AccessSchool;
