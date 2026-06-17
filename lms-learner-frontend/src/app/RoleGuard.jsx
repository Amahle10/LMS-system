import { Navigate, useParams } from "react-router-dom";

const RoleGuard = ({ children, role }) => {
  const { schoolId, role: routeRole } = useParams();

  if (!schoolId || role !== routeRole) {
    return <Navigate to={`/s/${schoolId || "school"}/${role}/login`} replace />;
  }

  return children;
};

export default RoleGuard;
