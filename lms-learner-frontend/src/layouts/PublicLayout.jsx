import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
