export const CUSTOMER_STATUSES = [
  "ACTIVE",
  "INACTIVE",
  "VIP",
  "BLOCKED",
] as const;

export type CustomerStatus = (typeof CUSTOMER_STATUSES)[number];

export const CUSTOMER_STATUS_LABELS: Record<CustomerStatus, string> = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  VIP: "VIP",
  BLOCKED: "Blocked",
};

export const CUSTOMER_STATUS_COLORS: Record<CustomerStatus, string> = {
  ACTIVE: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  INACTIVE: "bg-slate-500/15 text-slate-400 border-slate-500/30",
  VIP: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
  BLOCKED: "bg-red-500/15 text-red-400 border-red-500/30",
};

export const CUSTOMER_STATUS_OPTIONS: {
  label: string;
  value: CustomerStatus;
}[] = CUSTOMER_STATUSES.map((status) => ({
  label: CUSTOMER_STATUS_LABELS[status],
  value: status,
}));
