import { ContactRound, Calendar } from 'lucide-react';
import { ImScissors } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";

export default function AppointmentSummaryCard() {

    const appointmentSummaryItems = [
        {
            icon: ImScissors,
            label: 'Service',
            content: 'Harcut & Style'
        }, {
            icon: ContactRound,
            label: 'Staff',
            content: 'Diana Russell'
        }, {
            icon: MdOutlineWatchLater,
            label: 'Duration',
            content: '60min'
        }, {
            icon: IoIosPricetag,
            label: 'Price',
            content: '$75'
        }, {
            icon: Calendar,
            label: 'Time',
            content: 'Oct 18, 2026 at 9:30 AM'
        }
    ]

    return (
        <div className='p-4 bg-[#F7F5FF] my-4 rounded-lg'>
            <h2 className='font-medium pb-2'>Appointment Summary</h2>
            <div className='grid grid-cols-[1fr_1fr]'>
                <div>
                    {appointmentSummaryItems.map((item) => (
                        <div className='flex items-center py-1'>
                            <item.icon className='text-[#4F46E5] w-4 h-4 mr-2' />
                            <p className='text-gray-600'>{item.label}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {appointmentSummaryItems.map((item) => (
                        <p className='py-1'>{item.content}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}