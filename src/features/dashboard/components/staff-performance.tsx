import {
    Hand,
    Scissors,
    Sparkles,
    Smile,
} from "lucide-react";


const topServices = [
    {
        id: "1",
        name: "Haircut & Style",
        revenue: "$12,430",
        icon: Scissors,
        iconClassName: "bg-emerald-100 text-emerald-600",
    },
    {
        id: "2",
        name: "Coloring",
        revenue: "$8,760",
        icon: Sparkles,
        iconClassName: "bg-purple-100 text-purple-600",
    },
    {
        id: "3",
        name: "Facial Treatment",
        revenue: "$6,340",
        icon: Smile,
        iconClassName: "bg-blue-100 text-blue-600",
    },
    {
        id: "4",
        name: "Massage Therapy",
        revenue: "$5,120",
        icon: Hand,
        iconClassName: "bg-orange-100 text-orange-600",
    },
];


export default function StaffPerformance() {
    return (
        <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm w-full'>
            <h2 className='text-3xl font-semibold text-[#111827]'>Top Servicde</h2>
            <div className='flex flex-col gap-4 mt-4'>
                {topServices.map((service) => (
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <service.icon className={service.iconClassName} />
                            <h3 className='text-lg font-semibold text-[#111827]'>{service.name}</h3>
                        </div>
                        <span>{service.revenue}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}