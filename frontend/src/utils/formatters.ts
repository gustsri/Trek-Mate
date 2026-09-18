// Formatter helpers
export function formatThaiDateRange(startDate: string, endDate: string): string {
  // e.g., "8-9 / 10 / 68"
  return `${startDate} - ${endDate}`;
}

export function formatMemberRatio(current: number, max: number): string {
  return `${current}/${max}`;
}
