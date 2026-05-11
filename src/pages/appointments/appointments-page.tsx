import DatePickerFilter from '@/components/shared/filters/date-range-filter'
import AppointmentsFilters from '@/features/appointments/components/appointment-filters'
import AddAppointmentButton from '@/features/appointments/components/add-appointment-button'
import AppointmentsTable from '@/features/appointments/components/appointments-table'

export default function AppointmentsPage() {

    return (
        <>
            <div>
                <div className='flex justify-between'>
                    <AppointmentsFilters />
                    <div className='flex gap-4'>
                        <DatePickerFilter />
                        <AddAppointmentButton/>
                    </div>
                </div>
                <div>
                    <AppointmentsTable />
                </div>
            </div>
        </>
    )
}