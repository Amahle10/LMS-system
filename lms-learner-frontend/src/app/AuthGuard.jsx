import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthGuard = () => {
  const { schoolId, role } = useParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!schoolId || !role) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = (e) => {
    if (e?.preventDefault) e.preventDefault();

    if (!email.trim() || !password.trim()) return;

    login(role);

    const dashboardPath =
      role === "admin"
        ? `/s/${schoolId}/admin/dashboard`
        : role === "teacher"
          ? `/s/${schoolId}/teacher/dashboard`
          : role === "student"
            ? `/s/${schoolId}/student/dashboard`
            : role === "parent"
              ? `/s/${schoolId}/parent/dashboard`
              : `/`;

    navigate(dashboardPath, { replace: true });
  };

  return (
    <div style={{ width: "100%", maxWidth: "420px", padding: "2rem", background: "#fff", borderRadius: "12px" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>Login to {role}</h2>
      <p style={{ marginBottom: "1rem" }}>School: {schoolId}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "0.75rem", padding: "0.7rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "0.75rem", padding: "0.7rem" }}
        />
        <button
          type="submit"
          style={{ width: "100%", padding: "0.8rem" }}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default AuthGuard;
