import { type AppointmentStatus } from '@/lib/constants/appointment-status';

export type CalendarViewMode = 'day' | 'week';

export type CalendarStaff = {
  id: string;
  fullName: string;
  colorCode: string;
};

export type CalendarEvent = {
  id: string;
  customerName: string;
  serviceName: string;
  staffName: string;
  staffColor: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  status: AppointmentStatus;
};