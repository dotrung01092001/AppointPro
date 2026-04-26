import { useState } from "react"
import { type DateRange, DayPicker } from "react-day-picker";
import { formatDate } from "../../../lib/utils/format-date";
import { CalendarIcon } from "lucide-react";
import "react-day-picker/style.css";

export default function DatePickerFilter() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [range, setRange] = useState<DateRange | undefined>({
        from: new Date(new Date().getFullYear(), 0, 20),
        to: new Date(new Date().getFullYear(), 0, 20)
    })

    const label = range?.from && range?.to ? `${formatDate(range.from, 'MM/dd')} - ${formatDate(range.to, 'MM/dd')}` : "Select date range"

    return (
        <div className='realtive '>
            <button className='flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm cursor-pointer hover:bg-gray-50' onClick={() => setIsOpen(!isOpen)}>
                <CalendarIcon />
                {label}
            </button>
            {isOpen && (
                <div className='absolute z-50 mt-2 rounded-lg border bg-white p-3 shadow-lg'>
                    <DayPicker animate mode='range' selected={range} onSelect={setRange} />
                </div>
            )}
        </div>
    )
}