import { type CustomerStatus } from "@/lib/constants/customer-status";

export type CustomerTableItem = {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalBookings: number;
  totalSpent: number;
  status: CustomerStatus;
  avatar: string;
};
