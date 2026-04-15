import { format, isValid, parseISO } from "date-fns";

export function formatDate(
  value: string | Date | null | undefined,
  pattern = "dd/MM/yyyy",
) {
  if (!value) return "-";
  const date = typeof value === "string" ? parseISO(value) : value;
  if (!isValid(value)) return "-";
  return format(date, pattern);
}
