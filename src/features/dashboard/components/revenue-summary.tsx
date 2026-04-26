import RevenueChart from "@/components/charts/revenue-chart";


export default function RevenueSummary() {
    const labels = ["This Month", "This Year", "This Week"];

    return (
         <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm w-full">
                    <div className='mb-6 flex items-center justify-between'>
                        <h3 className='text-lg font-semibold text-[#111827]'>Revenue Summary</h3>
                        <select className='flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm hover:bg-gray-50 focus:outline-none cursor-pointer'>
                            {labels.map((item, index) => (
                                <option key={index} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>{item}</option>
                            ))}
                        </select>
                    </div>
                    <RevenueChart />
                </div>      
    )
}