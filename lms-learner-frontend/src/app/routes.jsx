import { Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LandingPage from "../pages/public/LandingPage";
import Features from "../pages/public/Features";
import Pricing from "../pages/public/Pricing";
import AccessSchool from "../pages/public/AccessSchool";
import AboutPage from "../pages/public/About";
import ProgramsPage from "../pages/public/Programs";
import EventsPage from "../pages/public/Events";
import ContactPage from "../pages/public/Contact";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Assignments from "../pages/Assignments";
import Grades from "../pages/Grades";
import Calendar from "../pages/Calendar";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import UsersPage from "../pages/UsersPage";
import ReportsPage from "../pages/ReportsPage";
import SettingsPage from "../pages/SettingsPage";

import NotFound from "../pages/notfound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="access" element={<AccessSchool />} />
        <Route path="access-school" element={<AccessSchool />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard/*" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="grades" element={<Grades />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
