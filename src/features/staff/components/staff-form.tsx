import CustomerInput from "@/components/ui/customer-input";
import RoleSelect from "./RoleSelect";


export default function StaffForm() {
    return (
        <div className='flex-1 overflow-y-auto p-4'>
            <div className='flex justify-between pb-1'>
                <h2 className='font-medium text-2xl'>New Staff</h2>
            </div>
            <p className='text-gray-400 pb-2'>Create a new staff for spa</p>

            <CustomerInput title="Name" type="text" placeholder='Type Fullname...' />
            <RoleSelect />
            <CustomerInput title="Phone" type="text" placeholder='Type Phone Number...'/>
            <CustomerInput title="Email" type="text" placeholder='Type Email...'/>
            
        </div>
    )
}