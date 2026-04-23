import { useLocation, Navigate, Outlet } from "react-router-dom";
import { ROUTE_PATHS } from "./route-paths";
import { useAuthStore } from "@/../../src/app/store/auth-store";



export default function ProtectedRoute() {
    const location = useLocation();
    const { isAuthenticated } = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to={ROUTE_PATHS.LOGIN} state={{ from: location }} replace />;
    }

    return <Outlet />;
}