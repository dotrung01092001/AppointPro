import NameInput from "@/features/customers/components/name-input";
import EmailInput from "./email-input";
import PhoneInput from "./phone-input";
import AddressInput from "./address-input";
import NotesArea from "./notes-area";


export default function CustomerForm() {
    return (
        <div className='flex-1 overflow-y-auto p-4'>
            <div className='flex justify-between pb-1'>
                <h2 className='font-medium text-2xl'>New Appointment</h2>
            </div>
            <p className='text-gray-400 pb-2'>Create a new booking for a customer</p>

            <NameInput />

            <EmailInput />

            <PhoneInput />

            <AddressInput />

            <NotesArea />

        </div>
    )
}