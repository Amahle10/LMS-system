import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Grades from "./pages/Grades";
import Login from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login page only */}
        <Route path="/login" element={<Login />} />

        {/* Pages with sidebar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/grades" element={<Grades />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;