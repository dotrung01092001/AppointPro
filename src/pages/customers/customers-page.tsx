import CustomersTable from "@/features/customers/components/customers-table";
import AddCustomerButton from "@/features/customers/components/add-customer-button";    


export default function CustomersPage () {
    return (
        <div>
            <div className='flex justify-end'>
                <AddCustomerButton />
            </div>
            <div>
                <CustomersTable />
            </div>
        </div>
    )
}