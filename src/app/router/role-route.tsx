import type { UserRole } from "../../lib/constants/roles";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_PATHS } from "./route-paths";
import { useAuthStore } from "@/app/store/auth-store";

type RoleRouteProps = {
    allowedRoles: UserRole[];
}

export default function RoleRoute({ allowedRoles }: RoleRouteProps) {
    const { isAuthenticated, user } = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
    }

    if (user && !allowedRoles.includes(user.role)) {
        return <Navigate to={ROUTE_PATHS.DASHBOARD} replace />;
    }

    return <Outlet />;
}