import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f8fafc" }}>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
