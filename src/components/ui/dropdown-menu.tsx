export default function DropdownMenu() {
    const labels = ["Daily", "Weekly", "Mothly", "Yearly"];

    return (
        <div>

            <select className='flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm hover:bg-gray-50 focus:outline-none cursor-pointer'>
                {labels.map((item, index) => (
                    <option key={index} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>{item}</option>
                ))}
            </select>

        </div>
    )
}