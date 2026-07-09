import {
    Drawer,
    DrawerClose,
    DrawerContent,

    DrawerFooter,

    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"
import StaffForm from "@/features/staff/components/staff-form"
import { UserCog } from "lucide-react";




export default function AddStaffButton () {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant="outline" className='bg-[#4F46E5] text-white cursor-pointer'>
                    <UserCog /> Add Staff

                </Button>
            </DrawerTrigger>
            <DrawerContent className='p-2 max-w-140'>
                <StaffForm />
                <DrawerFooter>
                    <Button className='w-full bg-[#4F46E5] text-white'>
                       <UserCog /> Add Staff
                    </Button>
                    <DrawerClose asChild>
                        <Button className='w-full border border-[#E5E7EB]' variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}