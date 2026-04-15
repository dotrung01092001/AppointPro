export const SERCICE_COLORS = [
  "#3B82F6", // blue
  "#22C55E", // green
  "#F59E0B", // amber
  "#EF4444", // red
  "#8B5CF6", // violet
  "#06B6D4", // cyan
  "#EC4899", // pink
  "#F97316", // orange
] as const;

export type ServiceColor = (typeof SERCICE_COLORS)[number];

export const DEFAULT_SERVICE_COLOR: ServiceColor = SERCICE_COLORS[0];

export const SERVICE_COLOR_OPTIONS: { label: string; value: ServiceColor }[] =
  SERCICE_COLORS.map((color) => ({
    label: color,
    value: color,
  }));
