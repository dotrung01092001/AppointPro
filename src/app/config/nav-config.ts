import { type UserRole } from "../../lib/constants/roles";

export type NavItem = {
  label: string;
  path: string;
  icon: string;
  roles: UserRole[];
};

export const navConfig: NavItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "layout-dashboard",
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Appointments",
    path: "/appointments",
    icon: "calendar-days",
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Calendar",
    path: "/calendar",
    icon: "calendar-range",
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Customers",
    path: "/customers",
    icon: "users",
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Staff",
    path: "/staff",
    icon: "users",
    roles: ["ADMIN", "RECEPTIONIST"],
  },

  {
    label: "Services",
    path: "/services",
    icon: "briefcase-medical",
    roles: ["ADMIN", "RECEPTIONIST"],
  },

  {
    label: "User",
    path: "/user",
    icon: "shield",
    roles: ["ADMIN"],
  },

  {
    label: "Notifications",
    path: "/notifications",
    icon: "bell",
    roles: ["ADMIN", "RECEPTIONIST", "STAFF"],
  },

  {
    label: "Bussiness Settings",
    path: "/setting/business",
    icon: "settings",
    roles: ["ADMIN"],
  },
];
