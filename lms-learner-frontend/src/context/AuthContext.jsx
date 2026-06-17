import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedRole = localStorage.getItem("role") || "visitor";
  const storedSchool = localStorage.getItem("school") || "";
  const storedAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const [role, setRole] = useState(storedRole);
  const [school, setSchool] = useState(storedSchool);
  const [isAuthenticated, setIsAuthenticated] = useState(storedAuthenticated);
  const [user, setUser] = useState(() => ({
    id: storedRole === "visitor" ? "guest-user" : `${storedRole}-${storedSchool || "demo"}`,
    name: storedRole === "visitor" ? "Guest User" : `${storedRole[0].toUpperCase()}${storedRole.slice(1)} User`,
    email: storedRole === "visitor" ? "guest@example.com" : `${storedRole}@${storedSchool || "demo"}.edu`,
    role: storedRole,
    school: storedSchool,
    joined: "2025-01-15",
  }));

  const setSchoolContext = (selectedSchool, selectedRole) => {
    const safeSchool = selectedSchool || "";
    const safeRole = selectedRole || "visitor";

    localStorage.setItem("school", safeSchool);
    localStorage.setItem("role", safeRole);
    setSchool(safeSchool);
    setRole(safeRole);
    setUser({
      id: `${safeRole}-${safeSchool || "demo"}`,
      name: `${safeRole[0].toUpperCase()}${safeRole.slice(1)} User`,
      email: `${safeRole}@${safeSchool || "demo"}.edu`,
      role: safeRole,
      school: safeSchool,
      joined: "2025-01-15",
    });
  };

  const login = (selectedRole, selectedSchool) => {
    const safeSchool = selectedSchool || "";
    const safeRole = selectedRole || "visitor";
    const nextUser = {
      id: `${safeRole}-${safeSchool || "demo"}`,
      name: `${safeRole[0].toUpperCase()}${safeRole.slice(1)} User`,
      email: `${safeRole}@${safeSchool || "demo"}.edu`,
      role: safeRole,
      school: safeSchool,
      joined: "2025-01-15",
    };

    localStorage.setItem("role", safeRole);
    localStorage.setItem("school", safeSchool);
    localStorage.setItem("isAuthenticated", "true");
    setRole(safeRole);
    setSchool(safeSchool);
    setUser(nextUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("school");
    localStorage.removeItem("isAuthenticated");
    setRole("visitor");
    setSchool("");
    setIsAuthenticated(false);
    setUser({
      id: "guest-user",
      name: "Guest User",
      email: "guest@example.com",
      role: "visitor",
      school: "",
      joined: "2025-01-15",
    });
  };

  const value = useMemo(
    () => ({ role, school, isAuthenticated, user, login, logout, setSchoolContext }),
    [role, school, isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
