import DatePickerFilter from "../../components/shared/filters/date-range-filter";
import { DropdownMenu } from "../../components/ui/dropdown-menu";
import DashboardStats from "@/features/dashboard/components/dashboard-stats";
import AppointmentOverview from "@/features/dashboard/components/appointments-overview";
import RevenueSummary from "@/features/dashboard/components/revenue-summary";
import { UpcommingAppointments } from "@/features/dashboard/components/upcoming-appointments";
import StaffPerformance from "@/features/dashboard/components/staff-performance";



export default function DashboardPage() {
    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-semibold text-[#111827]'>Dashboard</h1>
                <div className='flex gap-4'>
                    <DatePickerFilter />
                    <DropdownMenu />
                </div>
            </div>
            <DashboardStats />
            <div className="flex gap-4 py-4">
                <AppointmentOverview />
                <RevenueSummary />
            </div>
            <div className='grid grid-cols-[2fr_1fr] gap-4 py-4 w-full'>
                <UpcommingAppointments />
                <StaffPerformance />
            </div>
        </div >
    )
}