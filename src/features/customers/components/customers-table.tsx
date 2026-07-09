import type { CustomerTableItem } from '@/features/customers/types/customer.types'
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
export const customersTableData: CustomerTableItem[] = [
    {
        id: 'customer-001',
        name: 'Olivia Bryce',
        email: 'olivia@example.com',
        phone: '(866) 123-4647',
        totalBookings: 12,
        totalSpent: 1250,
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 'customer-002',
        name: 'Phoenix Baker',
        email: 'phoenix@example.com',
        phone: '(868) 234-6819',
        totalBookings: 8,
        totalSpent: 890,
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 'customer-003',
        name: 'Lana Spencer',
        email: 'lana@example.com',
        phone: '(840) 345-6796',
        totalBookings: 15,
        totalSpent: 1450.75,
        status: 'ACTIVE',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        id: 'customer-004',
        name: 'Dani Williamson',
        email: 'dani@example.com',
        phone: '(568) 456-7080',
        totalBookings: 7,
        totalSpent: 480,
        status: 'INACTIVE',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
        id: 'customer-005',
        name: 'Adil Lane',
        email: 'adil@example.com',
        phone: '(568) 567-8901',
        totalBookings: 10,
        totalSpent: 800.25,
        status: 'VIP',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
        id: 'customer-006',
        name: 'Candice Wu',
        email: 'candice@example.com',
        phone: '(840) 678-9012',
        totalBookings: 7,
        totalSpent: 815,
        status: 'BLOCKED',
        avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
        id: 'customer-007',
        name: 'Muriel Craig',
        email: 'muriel@example.com',
        phone: '(868) 789-0123',
        totalBookings: 9,
        totalSpent: 720,
        status: 'BLOCKED',
        avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
        id: 'customer-008',
        name: 'Dipa Carre',
        email: 'dipa@example.com',
        phone: '(568) 890-1234',
        totalBookings: 5,
        totalSpent: 375,
        status: 'INACTIVE',
        avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
]


export default function CustomersTable() {
    return (
        <Table className="w-full border border-gray-200 bg-white p-6 shadow-sm mt-4">
            <TableHeader>
                <TableRow className='bg-[#e3e7ec] text-[#111827]'>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Total Bookings</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {customersTableData.map((cus) => (
                    <TableRow key={cus.id}>
                        <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        src={cus.avatar}
                                        alt={cus.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                </Avatar>
                                <span>{cus.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>{cus.email}</TableCell>
                        <TableCell>{cus.phone}</TableCell>
                        <TableCell>{cus.totalBookings}</TableCell>
                        <TableCell>{cus.totalSpent}</TableCell>
                        <TableCell>
                            <Badge
                                className={cn(``, CUSTOMER_STATUS_COLORS[cus.status])}
                            >
                                {CUSTOMER_STATUS_LABELS[cus.status]}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}