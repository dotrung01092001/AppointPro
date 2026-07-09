import type { ServiceTableItem } from '@/features/services/types/service.types'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ServiceStatusBadge } from './service-status-badge';



// eslint-disable-next-line react-refresh/only-export-components
export const servicesTableData: ServiceTableItem[] = [
    {
        id: "service-001",
        name: "Haircut & Style",
        category: "Hair",
        duration: 60,
        price: 35,
        status: "ACTIVE",
    },
    {
        id: "service-002",
        name: "Hair Coloring",
        category: "Hair",
        duration: 90,
        price: 110,
        status: "ACTIVE",
    },
    {
        id: "service-003",
        name: "Facial Treatment",
        category: "Skincare",
        duration: 60,
        price: 65,
        status: "ACTIVE",
    },
    {
        id: "service-004",
        name: "Massage Therapy",
        category: "Body",
        duration: 60,
        price: 60,
        status: "ACTIVE",
    },
    {
        id: "service-005",
        name: "Manicure",
        category: "Nails",
        duration: 45,
        price: 45,
        status: "ACTIVE",
    },
    {
        id: "service-006",
        name: "Pedicure",
        category: "Nails",
        duration: 45,
        price: 60,
        status: "INACTIVE",
    },
    {
        id: "service-007",
        name: "Beard Trim",
        category: "Barber",
        duration: 30,
        price: 35,
        status: "ACTIVE",
    },
    {
        id: "service-008",
        name: "Highlights",
        category: "Hair",
        duration: 120,
        price: 120,
        status: "ACTIVE",
    },
];


export default function ServicesTable() {
    return (
        <Table className="w-full border border-gray-200 bg-white p-6 shadow-sm mt-4">
            <TableHeader>
                <TableRow className='bg-[#e3e7ec] text-[#111827]'>
                    <TableHead>Service</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {servicesTableData.map((ser) => (
                    <TableRow key={ser.id}>
                        <TableCell>{ser.name}</TableCell>
                        <TableCell>{ser.category}</TableCell>
                        <TableCell>{ser.duration}</TableCell>
                        <TableCell>{ser.price}</TableCell>
                        <TableCell>
                            <ServiceStatusBadge status={ser.status} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}