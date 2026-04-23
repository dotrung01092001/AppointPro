import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils/cn";
import type { Icon } from "lucide-react";
import React from "react";


interface SidebarItemProps {
    icon: typeof Icon;
    label: string;
    path: string;
}

export default function SidebarItem({ icon, label, path }: SidebarItemProps) {
    return (
        <NavLink to={path} className={({ isActive }) => cn("flex items-center font-semibold gap-3 px-4 py-2 rounded-md text-[#111827] hover:bg-gray-100", isActive ? "bg-[#F9FAFB] text-[#4F46E5]" : "")}>
            {React.createElement(icon, { className: "w-5 h-5" })}
            <span>{label}</span>
        </NavLink>
    )
}