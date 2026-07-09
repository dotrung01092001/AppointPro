import {
    Drawer,
    DrawerClose,
    DrawerContent,

    DrawerFooter,

    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"

import { UserRoundPlus } from 'lucide-react';
import CustomerForm from "@/features/customers/components/customer-form";
import { UserPlus } from "lucide-react";




export default function AddCustomerButton () {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant="outline" className='bg-[#4F46E5] text-white cursor-pointer'>
                    <UserRoundPlus /> Add Customer

                </Button>
            </DrawerTrigger>
            <DrawerContent className='p-2 max-w-140'>
                <CustomerForm />
                <DrawerFooter>
                    <Button className='w-full bg-[#4F46E5] text-white'>
                       <UserPlus /> Add customer
                    </Button>
                    <DrawerClose asChild>
                        <Button className='w-full border border-[#E5E7EB]' variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}