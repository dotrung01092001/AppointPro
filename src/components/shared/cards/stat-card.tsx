import { cn } from '@/lib/utils/cn'

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    period: string;
}

export default function StatCard({ title, value, change, period }: StatCardProps) {
    const changeNumber = parseFloat(change);
    const isPositive = changeNumber > 0;

    return (
        <div className='p-4 px-6 border border-[#E5E7EB] flex flex-col gap-y-2 rounded-lg bg-white shadow-sm'>
            <h3 className='font-semibold'>{title}</h3>
            <h2 className='font-semibold text-3xl'>
                {title !== 'Total Revenue' ? `${value}` : `$${value}`}
            </h2>
            <div className='flex justify-between'>
                <span className={cn("rounded-sm px-1 py-0.5 border-2", isPositive ? "border-[#10B981] text-[#10B981]" : "border-[#EF4444] text-[#EF4444]")}>{change}</span>
                <p>{period}</p>
            </div>
        </div>
    )
}