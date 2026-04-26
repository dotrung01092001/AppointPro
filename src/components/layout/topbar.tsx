import { Search } from 'lucide-react';
import NotificationBell from './notification-bell';
import SettingButton from './setting-button';
import { useAuthStore } from '../../app/store/auth-store';
import ProfileMenu from './profile-menu';

export default function TopBar() {
    const user = useAuthStore((state) => state.user);

    return (
        <div className='px-4 bg-white h-16.5 rounded-tr-xl flex items-center justify-between border border-gray-200'>
            <div className="flex items-center">
                <Search className="h-10.5 w-10.5 p-2 border border-gray-300 rounded-l-md text-[#111827]" />
                <input type="text" placeholder="Search..." className="w-100 border border-l-0 border-gray-300 py-2 px-4 rounded-r-md focus:outline-none " />
            </div>
            <div className='flex items-center gap-4'>
                <NotificationBell />
                <SettingButton />
                <ProfileMenu user={user!} />
            </div>
        </div>
    )
}