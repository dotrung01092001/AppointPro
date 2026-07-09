import StaffTable from "@/features/staff/components/staff-table"
import AddStaffButton from "@/pages/staff/add-staff-button"



export default function StaffPage() {
    return (
        <div>
            <div className='flex justify-end'>
                <AddStaffButton />
            </div>
            <div>
                <StaffTable />
            </div>
        </div>
    )

}