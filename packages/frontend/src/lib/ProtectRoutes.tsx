import { Navigate, Outlet } from "react-router";
function ProtectRoutes() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectRoutes;
