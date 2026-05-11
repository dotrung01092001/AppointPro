import { Button } from "@/components/ui/button";


export default function SlotPicker() {

    const timeSlots = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

    return (
        <div>
            <h2 className='font-medium pb-2'>Avalable Time Slots</h2>
            <div className='grid grid-cols-5 gap-2'>
                {timeSlots.map((time) => (
                    <Button className="py-1 px-6 border border-gray-300 rounded-md focus:bg-[#4F46E5] focus:text-white cursor-pointer">
                        {time}
                    </Button>
                ))}
            </div>
        </div>
    )
}