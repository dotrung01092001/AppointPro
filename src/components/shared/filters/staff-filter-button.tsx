
const staff = [
    "All Staff",
    "Dianne Russell",
    "Albert Flores",
    "Mical Craig",
    "Cody Press",
];

export default function StaffFilterButton() {
    return (
        <select className='flex items-center gap-2 rounded-md border  border-gray-300 font-semibold bg-white px-3 py-2.5 text-sm shadow-sm hover:bg-gray-50 focus:outline-none cursor-pointer'>
            {staff.map((emp, index) => (
                <option key={index} className='block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100'>{emp}</option>
            ))}
        </select>
    )
}