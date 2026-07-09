import { type StaffTableItem } from "../types/staff.types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";
import { CUSTOMER_STATUS_COLORS, CUSTOMER_STATUS_LABELS } from "@/lib/constants/customer-status";

// eslint-disable-next-line react-refresh/only-export-components
export const staffTableData: StaffTableItem[] = [
    {
        id: 'staff-001',
        name: 'Dianne Russell',
        role: 'Hair Stylist',
        phone: '(504) 123-4567',
        email: 'dianne@example.com',
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 'staff-002',
        name: 'Albert Flores',
        role: 'Hair Stylist',
        phone: '(504) 234-5678',
        email: 'albert@example.com',
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 'staff-003',
        name: 'Muriel Craig',
        role: 'Nail Technician',
        phone: '(504) 345-6789',
        email: 'muriel@example.com',
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        id: 'staff-004',
        name: 'Cody Evans',
        role: 'Massage Therapist',
        phone: '(504) 456-7890',
        email: 'cody@example.com',
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
        id: 'staff-005',
        name: 'Randy Ortiz',
        role: 'Nail Technician',
        phone: '(504) 567-8901',
        email: 'randy@example.com',
        status: 'INACTIVE',
        avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
        id: 'staff-006',
        name: 'Tiana Vincent',
        role: 'Barber',
        phone: '(504) 678-9012',
        email: 'tiana@example.com',
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
]


export default function StaffTable() {
    return (
        <Table className="w-full border border-gray-200 bg-white p-6 shadow-sm mt-4">
            <TableHeader>
                <TableRow className='bg-[#e3e7ec] text-[#111827]'>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Emails</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {staffTableData.map((staff) => (
                    <TableRow key={staff.id}>
                        <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        src={staff.avatar}
                                        alt={staff.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                </Avatar>
                                <span>{staff.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>{staff.role}</TableCell>
                        <TableCell>{staff.phone}</TableCell>
                        <TableCell>{staff.email}</TableCell>
                        <TableCell>
                            <Badge
                                className={cn(``, CUSTOMER_STATUS_COLORS[staff.status])}
                            >
                                {CUSTOMER_STATUS_LABELS[staff.status]}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}