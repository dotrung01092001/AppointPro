import { useAuthStore, type CurrentUser } from "../../app/store/auth-store";
import ProfileSidebar from "./profile-sidebar";
import { ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../app/router/route-paths";
import {

  LogOutIcon,
  UserKey,
  UserIcon,
} from "lucide-react"


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProfileMenu({ user }: { user: CurrentUser }) {

    const navigate = useNavigate();

    const { logout } = useAuthStore();



    const navigateChangePassword = () => {
        navigate(ROUTE_PATHS.CHANGE_PASSWORD);
    }

    const navigateProfile = () => {
        navigate(ROUTE_PATHS.PROFILE);
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='border-none' >
                    <ProfileSidebar user={user} />

                    <ChevronDown className="h-4 w-4 text-gray-500" />

                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white'>
                
                    
                    <DropdownMenuItem onClick={navigateProfile}>
                        <UserIcon />

                        Profile
                        
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={navigateChangePassword}>
                        <UserKey />
                        Change Password
                        
                    </DropdownMenuItem>

                
                <DropdownMenuSeparator />
                <DropdownMenuItem variant='destructive' onClick={logout}>
                    <LogOutIcon />
                    Log out
                    
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
