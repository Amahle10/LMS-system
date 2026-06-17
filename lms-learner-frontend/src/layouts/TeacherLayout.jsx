import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

const TeacherLayout = () => {
  return (
    <div style={{ display: "flex" }}>
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

export default TeacherLayout;
