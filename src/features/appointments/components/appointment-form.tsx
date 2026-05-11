

import ServiceSelect from "./service-select";
import TextArea from "@/components/shared/form/textarea";
import CustomerSelect from "./customer-select";
import StaffSelect from "./staff-select";
import { DateSelect } from "./date-select";
import SlotPicker from "./slot-picker";
import AppointmentSummaryCard from "./appointment-summary-card";


export default function AppointmentForm() {



    return (

        <div className='flex-1 overflow-y-auto p-4'>
            <div className='flex justify-between pb-1'>
                <h2 className='font-medium text-2xl'>New Appointment</h2>
            </div>
            <p className='text-gray-400 pb-2'>Create a new booking for a customer</p>

            <CustomerSelect />

            <ServiceSelect />

            <StaffSelect />

            <DateSelect />

            <SlotPicker />

            <AppointmentSummaryCard />

            <TextArea title='Customer Notes' placeholder="Add a note for the customer..." />
            <TextArea title='Internal Note' placeholder='Add an internal note...' />

        </div>

    )
}