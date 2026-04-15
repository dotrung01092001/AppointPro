export const NOTIFAICATION_TYPES = [
  "NEW_BOOKING",
  "BOOKING_CANCELLED",
  "BOOKING_RESCHEDULED",
  "UPCOMING_APPOINTMENT",
  "STAFF_UNAVAILABLE",
  "SYSTEM_ALERT",
] as const;

export type NotificationType = (typeof NOTIFAICATION_TYPES)[number];

export const NOTIFICATION_TYPE_LABELS: Record<NotificationType, string> = {
  NEW_BOOKING: "New Booking",
  BOOKING_CANCELLED: "Booking Cancelled",
  BOOKING_RESCHEDULED: "Booking Rescheduled",
  UPCOMING_APPOINTMENT: "Upcoming Appointment",
  STAFF_UNAVAILABLE: "Staff Unavailable",
  SYSTEM_ALERT: "System Alert",
};

export const NOTIFICATION_TYPE_ICONS: Record<NotificationType, string> = {
  NEW_BOOKING: "calendar-plus",
  BOOKING_CANCELLED: "calendar-x",
  BOOKING_RESCHEDULED: "calendar-sync",
  UPCOMING_APPOINTMENT: "clock-3",
  STAFF_UNAVAILABLE: "user-x",
  SYSTEM_ALERT: "triangle-alert",
};

