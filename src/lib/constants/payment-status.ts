export const PAYMENT_STATUSES = [
  "UNPAID",
  "PAID",
  "PARTIAL",
  "REFUNDED",
] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  UNPAID: "Unpaid",
  PAID: "Paid",
  PARTIAL: "Partial",
  REFUNDED: "Refund",
};

export const PAYMENT_STATUS_COLORS: Record<PaymentStatus, string> = {
  UNPAID: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  PAID: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  PARTIAL: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  REFUNDED: "bg-slate-500/15 text-slate-300 border-slate-500/30",
};

export const PAYMENT_STATUS_OPTIONS: { label: string; value: PaymentStatus }[] =
  PAYMENT_STATUSES.map((status) => ({
    label: PAYMENT_STATUS_LABELS[status],
    value: status,
  }));
