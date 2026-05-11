"use client"

import * as React from "react"
import { formatDate } from '@/lib/utils/format-date'

import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils/cn"
import { ChevronDown } from "lucide-react"



export function DateSelect() {
    const [date, setDate] = React.useState<Date>();
    const [open, setOpen] = React.useState(false);


    return (
        <Field className="mx-auto w-full">
            <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date-picker-simple"
                        className=" font-normal w-full h-12 flex gap-4 border-gray-300 hover:border-gray-400 items-center justify-between rounded-md border bg-white px-4 text-sm transition"

                    >
                        <div className="flex items-center gap-3">
                            <CalendarDays className="h-5 w-5 text-gray-500" />

                            <span
                                className={cn(
                                    date ? "text-gray-900" : "text-gray-400"
                                )}
                            >
                                {date ? formatDate(date) : "Select date..."}
                            </span>
                        </div>

                        <ChevronDown
                            className={cn(
                                "h-5 w-5 text-gray-400 transition-transform duration-200",
                                open && "rotate-180"
                            )}
                        />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        className='bg-white w-full'
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => { setDate(selectedDate); setOpen(false) }}
                        defaultMonth={date}
                    />
                </PopoverContent>
            </Popover>
        </Field>
    )
}
