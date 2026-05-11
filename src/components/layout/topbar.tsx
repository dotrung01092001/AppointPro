import SearchBar from './search-bar';
import NotificationBell from './notification-bell';
import SettingButton from './setting-button';
import { useAuthStore } from '../../app/store/auth-store';
import ProfileMenu from './profile-menu';

export default function TopBar() {
    const user = useAuthStore((state) => state.user);

    return (
        <div className='px-4 bg-white h-16.5 rounded-tr-xl flex items-center justify-between border border-gray-200'>

            <SearchBar />

            <div className='flex items-center gap-4'>
                <NotificationBell />
                <SettingButton />
                <ProfileMenu user={user!} />
            </div>
        </div>
    )
}