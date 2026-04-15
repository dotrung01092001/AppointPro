export const BOOKING_SOURCES = [
  "ADMIN",
  "RECEPTIONIST",
  "ONLINE",
  "PHONE",
  "WALK_IN",
] as const;

export type BookingSource = (typeof BOOKING_SOURCES)[number];

export const BOOKING_SOURCE_LABELS: Record<BookingSource, string> = {
  ADMIN: "Admin",
  RECEPTIONIST: "Receptionist",
  ONLINE: "Online",
  PHONE: "Phone",
  WALK_IN: "Walk-in",
};

export const BOOKING_SOURCE_OPTIONS: { label: string; value: BookingSource }[] =
  BOOKING_SOURCES.map((source) => ({
    label: BOOKING_SOURCE_LABELS[source],
    value: source,
  }));