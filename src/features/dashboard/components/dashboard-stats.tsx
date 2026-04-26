import StatCard from "@/components/shared/cards/stat-card"


export default function DashboardStats() {
    return (
         <div className='grid grid-cols-4 gap-8 pt-4'>
                <StatCard title='Total Appointments' value='1,248' change='+13,0%' period='visit month' />
                <StatCard title='Total Revenue' value='45,248.89' change='-21,0%' period='visit month' />
                <StatCard title='New Customers' value='523' change='+11,2%' period='visit month' />
                <StatCard title="Today's Appointments" value='32' change='+2,0%' period='yesterday' />
            </div>
    )
}