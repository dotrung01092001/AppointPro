import { type UserRole } from "../../lib/constants/roles";
import { LayoutDashboard, CalendarDays, CalendarRange, Users, BriefcaseMedical, Shield, Bell, Settings, IdCardLanyard } from "lucide-react";
import type { Icon } from "lucide-react";


export type NavItem = {
  label: string;
  path: string;
  icon: typeof Icon;
  roles: UserRole[];
};

export const navConfig: NavItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Calendar",
    path: "/calendar",
    icon: CalendarRange,
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Customers",
    path: "/customers",
    icon: Users,
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Staff",
    path: "/staff",
    icon: IdCardLanyard,
    roles: ["ADMIN", "RECEPTIONIST"],
  },

  {
    label: "Services",
    path: "/services",
    icon: BriefcaseMedical,
    roles: ["ADMIN", "RECEPTIONIST"],
  },

  {
    label: "Users",
    path: "/users",
    icon: Shield,
    roles: ["ADMIN"],
  },

  {
    label: "Notifications",
    path: "/notifications",
    icon: Bell,
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
    roles: ["ADMIN"],
  },
];
