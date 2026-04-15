export const APPOINTMENT_STATUSES = [
  "PENDING",
  "CONFIRMED",
  "CHECKED_IN",
  "NO_SHOW",
  "SCHEDULED",
  "COMPLETED",
  "CANCELED",
] as const;

export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];

export const APPOINTMENT_STATUS_LABELS: Record<AppointmentStatus, string> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  CHECKED_IN: "Checked In",
  NO_SHOW: "No Show",
  SCHEDULED: "Scheduled",
  COMPLETED: "Completed",
  CANCELED: "Canceled",
};

export const APPOINTMENT_STATUS_COLORS: Record<AppointmentStatus, string> = {
  PENDING: "gray",
  CONFIRMED: "green",
  CHECKED_IN: "blue",
  NO_SHOW: "red",
  SCHEDULED: "orange",
  COMPLETED: "teal",
  CANCELED: "darkred",
};

export const APPOINTMENT_STATUS_OPTIONS = APPOINTMENT_STATUSES.map(
  (status) => ({
    value: status,
    label: APPOINTMENT_STATUS_LABELS[status],
  }),
);
