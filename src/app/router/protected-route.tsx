import { useLocation, Navigate, Outlet } from "react-router-dom";
import { ROUTE_PATHS } from "./route-paths";

function useAuth() {
    const accessToken = localStorage.getItem('accessToken');

    return {
        accessToken,
        isAuthenticated: !!accessToken,
    }
}

export default function ProtectedRoute() {
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to={ROUTE_PATHS.LOGIN} state={{ from: location }} replace />;
    }

    return <Outlet />;
}