import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { BrickWallShield } from 'lucide-react';

export default function AppointmentActions() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 flex items-center justify-start cursor-pointer w-full">
            <span className="sr-only">Open menu</span>
            <BrickWallShield className="h-4 w-4 text-[#9CA3AF]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='bg-white'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
          >
            View
          </DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Reschedule</DropdownMenuItem>
          <DropdownMenuItem>Cancel</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}