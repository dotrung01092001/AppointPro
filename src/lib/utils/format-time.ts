import { format, isValid, parseISO } from "date-fns";

export function formatTime(
  value: string | Date | null | undefined,
  pattern = "HH:mm",
) {
  if (!value) return "-";
  if (typeof value === "string" && /^\d{2}:\d{2}/.test(value)) {
    return value.slice(0, 5);
  }

  const date = typeof value === "string" ? parseISO(value) : value;

  if (!isValid(value)) return "-";

  return format(date, pattern);
}
