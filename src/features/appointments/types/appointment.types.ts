import { type PaymentStatus } from "@/lib/constants/payment-status";
import { type AppointmentStatus } from "@/lib/constants/appointment-status";

export type AppointmentTableItem = {
  id: string;
  customer: {
    name: string;
    avatar: string;
  };
  service: string;
  staff: string;
  dateTime: string;
  status: AppointmentStatus;
  payment: PaymentStatus;
};
