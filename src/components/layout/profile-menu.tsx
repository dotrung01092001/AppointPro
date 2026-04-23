import { useAuthStore, type CurrentUser } from "../../app/store/auth-store";
import ProfileSidebar from "./profile-sidebar";
import { ChevronDown } from 'lucide-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../app/router/route-paths";


export default function ProfileMenu({ user }: { user: CurrentUser }) {
    const [isDropdown, setIsDropdown] = useState<boolean>(false);

    const navigate = useNavigate();

    const {logout} = useAuthStore();

    const handleDropdown = () => {
        setIsDropdown(!isDropdown);
    }

    const navigateChangePassword = () => {
        navigate(ROUTE_PATHS.CHANGE_PASSWORD);
    }

    const navigateProfile = () => {
        navigate(ROUTE_PATHS.PROFILE);
    }


    return (
        <div className="flex items-center p-4 border-t border-t-gray-300">
            <ProfileSidebar user={user} />
            <button className="cursor-pointer" onClick={handleDropdown}>
                <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {isDropdown && (
                <div className="absolute top-16 right-4 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={navigateProfile}>
                        Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={navigateChangePassword}>
                        Change Password
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={logout}>
                        Logout
                    </a>
                </div>
            )
            }
        </div>
    )
}