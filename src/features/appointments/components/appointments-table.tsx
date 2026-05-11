import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {  PAYMENT_STATUS_COLORS, PAYMENT_STATUS_LABELS } from "@/lib/constants/payment-status";
import {  APPOINTMENT_STATUS_COLORS, APPOINTMENT_STATUS_LABELS } from "@/lib/constants/appointment-status"

import { cn } from "@/lib/utils/cn";
import AppointmentActions from "./appointment-actions";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { type AppointmentTableItem } from '@/features/appointments/types/appointment.types.ts'


// eslint-disable-next-line react-refresh/only-export-components
export const appointmentsTableData: AppointmentTableItem[] = [
  {
    id: "1",
    customer: {
      name: "Olivia Rhye",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    service: "Haircut & Style",
    staff: "Dianne Russell",
    dateTime: "Oct 16, 10:00 AM",
    status: "CONFIRMED",
    payment: "PAID",
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
    status: "PENDING",
    payment: "UNPAID",
  },
  {
    id: "3",
    customer: {
      name: "Lana Steiner",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    service: "Laser Hair Removal",
    staff: "Mical Craig",
    dateTime: "Oct 16, 12:00 PM",
    status: "CONFIRMED",
    payment: "PAID",
  },
  {
    id: "4",
    customer: {
      name: "Demi Wilkinson",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    service: "Massage Therapy",
    staff: "Cody Press",
    dateTime: "Oct 16, 01:30 PM",
    status: "CONFIRMED",
    payment: "PAID",
  },
  {
    id: "5",
    customer: {
      name: "Ari Lane",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    service: "Manicure",
    staff: "Dianne Russell",
    dateTime: "Oct 16, 02:00 PM",
    status: "CONFIRMED",
    payment: "PAID",
  },
  {
    id: "6",
    customer: {
      name: "Candice Wu",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    service: "Haircut & Style",
    staff: "Albert Flores",
    dateTime: "Oct 16, 04:00 PM",
    status: "CONFIRMED",
    payment: "REFUNDED",
  },
  {
    id: "7",
    customer: {
      name: "Mical Craig",
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    service: "Nail Coloring",
    staff: "Mical Craig",
    dateTime: "Oct 16, 04:00 PM",
    status: "CONFIRMED",
    payment: "PAID",
  },
  {
    id: "8",
    customer: {
      name: "Drew Cano",
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    service: "Massage",
    staff: "Cody Press",
    dateTime: "Oct 16, 04:30 PM",
    status: "PENDING",
    payment: "UNPAID",
  },
  {
    id: "9",
    customer: {
      name: "Orlando Diggs",
      avatar: "https://i.pravatar.cc/40?img=9",
    },
    service: "Facial Treatment",
    staff: "Dianne Russell",
    dateTime: "Oct 16, 04:00 PM",
    status: "CONFIRMED",
    payment: "PAID",
  },
];

export default function AppointmentsTable() {
  return (
    <Table className="w-full border border-gray-200 bg-white p-6 shadow-sm mt-4">
      <TableHeader>
        <TableRow className='bg-[#e3e7ec] text-[#111827]'>
          <TableHead>Customer</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Staff</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointmentsTableData.map((app) => (
          <TableRow key={app.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src={app.customer.avatar}
                    alt={app.customer.name}
                    className="w-8 h-8 rounded-full"
                  />
                </Avatar>
                <span>{app.customer.name}</span>
              </div>
            </TableCell>
            <TableCell>{app.service}</TableCell>
            <TableCell>{app.staff}</TableCell>
            <TableCell>{app.dateTime}</TableCell>
            <TableCell>
              <Badge
                className={cn(``, APPOINTMENT_STATUS_COLORS[app.status])}
              >
                {APPOINTMENT_STATUS_LABELS[app.status]}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                className={cn(``, PAYMENT_STATUS_COLORS[app.payment])}
              >
                {PAYMENT_STATUS_LABELS[app.payment]}
              </Badge>
            </TableCell>
            <TableCell>
              <AppointmentActions />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}