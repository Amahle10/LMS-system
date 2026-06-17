import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

const SchoolLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SchoolLayout;
