import StatusFilterButton from '@/components/shared/filters/status-filter-button'
import StaffFilterButton from '@/components/shared/filters/staff-filter-button'              

export default function AppointmentsFilters() {
    return (
        <div className='flex gap-2'>
            <StatusFilterButton />
            <StaffFilterButton />
        </div>
    )
}