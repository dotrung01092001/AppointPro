import { Button } from "@/components/ui/button"
import { ListPlus } from 'lucide-react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,

    DrawerFooter,

    DrawerTrigger,
} from "@/components/ui/drawer"
import AppointmentForm from "./appointment-form";
import { Calendar } from "lucide-react";

export default function AddAppointmentButton() {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant="outline" className='bg-[#4F46E5] text-white cursor-pointer'>
                    <ListPlus /> Add Appointment

                </Button>
            </DrawerTrigger>
            <DrawerContent className='p-2 max-w-140'>
                <AppointmentForm />
                <DrawerFooter>
                    <Button className='w-full bg-[#4F46E5] text-white'>
                        <Calendar /> Create Appointment
                    </Button>
                    <DrawerClose asChild>
                        <Button className='w-full border border-[#E5E7EB]' variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
