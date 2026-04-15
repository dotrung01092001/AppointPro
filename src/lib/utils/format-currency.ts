export function formatCurrency(
  amount: number | null | undefined,
  currency: "USD",
  locale: "en-US",
) {
  if (amount === null || amount === undefined || Number.isNaN(amount))
    return "-";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
