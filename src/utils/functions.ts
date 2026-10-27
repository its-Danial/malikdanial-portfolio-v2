import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sanity `date` fields are plain YYYY-MM-DD strings, which `Date` parses as
// UTC midnight. Formatting in UTC keeps "2024-01-01" from rendering as 2023
// in timezones behind UTC (e.g. in the Studio).
export const formatDate = (
  dateStr: string,
  format?: Intl.DateTimeFormatOptions,
) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    ...format,
    timeZone: "UTC",
  }).format(date);
};

export const formatDuration = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string | null;
}) => {
  if (!startDate) return "";

  const start = (format: Intl.DateTimeFormatOptions) =>
    formatDate(startDate, format);

  if (!endDate) {
    return `${start({ year: "numeric" })} — Present`;
  }

  const startYear = start({ year: "numeric" });
  const endYear = formatDate(endDate, { year: "numeric" });

  if (startYear !== endYear) {
    return `${startYear} — ${endYear}`;
  }

  return `${start({ month: "short" })} — ${formatDate(endDate, { month: "short" })} ${startYear}`;
};
