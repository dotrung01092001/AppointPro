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
  PENDING: "bg-amber-50 text-amber-600 border-amber-200",
  CONFIRMED: "bg-emerald-50 text-emerald-600 border-emerald-200",
  CHECKED_IN: "bg-blue-50 text-blue-600 border-blue-200",
  NO_SHOW: "bg-rose-50 text-rose-600 border-rose-200",
  SCHEDULED: "bg-indigo-50 text-indigo-600 border-indigo-200",
  COMPLETED: "bg-teal-50 text-teal-600 border-teal-200",
  CANCELED: "bg-slate-100 text-slate-600 border-slate-200",
};

export const APPOINTMENT_STATUS_OPTIONS = APPOINTMENT_STATUSES.map(
  (status) => ({
    value: status,
    label: APPOINTMENT_STATUS_LABELS[status],
  }),
);
