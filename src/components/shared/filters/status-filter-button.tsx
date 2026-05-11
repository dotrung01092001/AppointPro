import { APPOINTMENT_STATUS_OPTIONS } from "@/lib/constants/appointment-status"

export default function StaffFilterButton() {
    return (
        <select className='flex items-center gap-2 rounded-md border border-gray-300 font-semibold bg-white px-3 py-2.5 text-sm shadow-sm hover:bg-gray-50 focus:outline-none cursor-pointer'>
            <option key='All' className='block px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100'>All</option>
            {APPOINTMENT_STATUS_OPTIONS.map((status) => (
                <option key={status.value} className='block px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100'>{status.label}</option>
            ))}
        </select>
    )
}