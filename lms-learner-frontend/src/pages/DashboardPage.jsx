import { useAuth } from "../hooks/useAuth";

const DashboardPage = () => {
  const { role, school, isAuthenticated } = useAuth();

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Authenticated:</strong> {isAuthenticated ? "Yes" : "No"}</p>
    </section>
  );
};

export default DashboardPage;
