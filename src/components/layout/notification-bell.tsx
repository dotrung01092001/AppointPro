import { Bell } from 'lucide-react';

export default function NotificationBell() {
    return (
        <button className='relative cursor-pointer'>
            <Bell className='h-6 w-6 text-gray-500' />
            <span className='absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full'>3</span>
        </button>
    )
}