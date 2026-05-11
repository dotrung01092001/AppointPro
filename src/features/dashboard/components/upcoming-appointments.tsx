import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { cn } from "@/lib/utils/cn"
import { Badge } from "@/components/ui/badge"



const appointments = [
    {
        id: "1",
        customer: {
            name: "Olivia Rhye",
            avatar: "https://i.pravatar.cc/40?img=1",
        },
        service: "Haircut & Style",
        staff: "Dianne Russell",
        dateTime: "Oct 16, 12:00 AM",
        status: "Confirmed",
    },
    {
        id: "2",
        customer: {
            name: "Phoenix Baker",
            avatar: "https://i.pravatar.cc/40?img=2",
        },
        service: "Facial Treatment",
        staff: "Albert Flores",
        dateTime: "Oct 16, 11:30 AM",
        status: "Confirmed",
    },
    {
        id: "3",
        customer: {
            name: "Lana Steiner",
            avatar: "https://i.pravatar.cc/40?img=3",
        },
        service: "Laser Hair Removal",
        staff: "Marvin Craig",
        dateTime: "Oct 16, 03:00 PM",
        status: "Pending",
    },
    {
        id: "4",
        customer: {
            name: "Demi Wilkinson",
            avatar: "https://i.pravatar.cc/40?img=4",
        },
        service: "Massage Therapy",
        staff: "Cody Ryan",
        dateTime: "Oct 16, 04:30 PM",
        status: "Confirmed",
    },
];

export function UpcommingAppointments() {
    return (
        <div className='rounded-2xl border border-gray-200 bg-white py-6 shadow-sm w-full'>
            <h2 className='text-3xl font-semibold text-[#111827] ml-6'>Recent Appointments</h2>
            <Table className="w-full border border-gray-200 bg-white p-6 shadow-sm mt-4">
                <TableHeader>
                    <TableRow className='bg-[#e3e7ec] text-[#111827]'>
                        <TableHead>Customer</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Staff</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {appointments.map((app) => (
                        <TableRow key={app.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={app.customer.avatar}
                                        alt={app.customer.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span>{app.customer.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{app.service}</TableCell>
                            <TableCell>{app.staff}</TableCell>
                            <TableCell>{app.dateTime}</TableCell>
                            <TableCell>
                                <Badge
                                    className={cn(``, app.status === 'Confirmed' ? "border-[#10B981] text-[#10B981]" : "border-[#EF4444] text-[#EF4444]")}
                                >
                                    {app.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
