import Logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { navConfig } from '../../app/config/nav-config';
import SidebarItem from './sidebar-item';
import { useAuthStore } from '../../app/store/auth-store';
import ProfileSidebar from './profile-sidebar';



export default function Sidebar() {
    /* const userRole = "ADMIN";  */

    const { user } = useAuthStore();


    const menus = navConfig.filter((item) => {
        if (!user || !item.roles) {
            return false;
        }
        return item.roles.includes(user.role);
    })

    const handle = () => {
        // Implement sidebar toggle logic here
        console.log(user)
    }

    return (
        <div className='flex flex-col ml-4 my-4 bg-white rounded-l-xl shadow-lg border border-gray-200'>
            <div className='flex items-center gap-2 p-4 border-b border-b-gray-300'>
                <div className='flex items-center'>
                    <img className='w-8' src={Logo} alt="Logo" />
                    <h1 className='text-xl font-bold'>Appoint<span className='bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Pro</span></h1>
                </div>
                <button onClick={handle} className='ml-auto text-gray-500 hover:text-gray-700 focus:outline-none rounded-md flex items-center justify-center'>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className='p-2'>
                {menus.map((item) => {
                    if (item.label !== 'User' && item.label !== 'Settings') {
                        return (
                            <SidebarItem key={item.path} icon={item.icon} label={item.label} path={item.path} />
                        );
                    }
                })}
            </div>
            <div className='p-2 border-t border-gray-300'>
                <h2 className='text-md p-2 font-semibold text-[#111827]'>MANAGEMENT</h2>
                {menus.map((item) => {
                    if (item.label === 'Users' || item.label === 'Settings') {
                        return (
                            <SidebarItem key={item.path} icon={item.icon} label={item.label} path={item.path} />
                        );
                    }
                })}
            </div>
            <div className='justify-end mt-auto p-2'>
                <ProfileSidebar user={user!} />
            </div>
        </div >
    )
}