import { Calendar, Bell, CreditCard, UserPlus, XCircle } from "lucide-react";

interface NotificationProps {
    title: string;
    message: string;
    timeAgo: string;
    isRead: boolean;
}

const getNotificationIcons = (title: string) => {
    switch (title) {
        case "New appointment booked":
            return <Calendar size={16} strokeWidth={3} className='bg-blue-500 w-10 h-10 text-white p-2 rounded-xl' />
        case "Payment received":
            return <CreditCard size={16} strokeWidth={3} className='bg-green-500 w-10 h-10 text-white p-2 rounded-xl' />
        case "Appointment canceled":
            return <XCircle size={16} strokeWidth={3} className='bg-red-500 w-10 h-10 text-white p-2 rounded-xl' />
        case "New customer registered":
            return <UserPlus size={16} strokeWidth={3} className='bg-green-500 w-10 h-10 text-white p-2 rounded-xl' />
        default:
            return <Bell size={16} strokeWidth={3} className='bg-blue-500 w-10 h-10 text-white p-2 rounded-xl' />

    }
}

export default function NotificationItem({ title, message, timeAgo, isRead }: NotificationProps) {
    return (
        <div className='flex px-4 py-4 items-center gap-4 border border-[#E5E7EB] my-2 rounded-2xl bg-white'>
            <div>
                {getNotificationIcons(title)}
            </div>
            <div className='flex-1'>
                <p className={`text-sm ${!isRead ? 'font-semibold' : 'font-medium'}`}>{title}</p>
                <p className="text-xs text-gray-500">{message}</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{timeAgo}</span>
        </div>
    )
}