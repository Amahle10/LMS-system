import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);

    if (role === "student") navigate("/student/dashboard");
    else if (role === "teacher") navigate("/teacher/dashboard");
    else if (role === "parent") navigate("/parent/dashboard");
    else if (role === "manager") navigate("/manager/dashboard");
    else navigate("/");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "420px", margin: "0 auto" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Select role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ display: "block", width: "100%", padding: "0.5rem", margin: "0.5rem 0 1rem" }}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="manager">Manager</option>
          <option value="visitor">Visitor</option>
        </select>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default LoginPage;
