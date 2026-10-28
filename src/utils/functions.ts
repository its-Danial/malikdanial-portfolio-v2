import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Umami rejects event names over 50 characters, so names are a short fixed
// set and the specifics (title, url, ...) travel as event properties.
export type AnalyticsEvent =
  | "nav-click"
  | "social-click"
  | "outbound-link"
  | "resume-click"
  | "archive-click"
  | "home-click"
  | "content-link"
  | "credit-link";

type EventData = Record<string, string | null | undefined>;

const compact = (data: EventData) =>
  Object.fromEntries(
    Object.entries(data).filter((entry): entry is [string, string] =>
      Boolean(entry[1]),
    ),
  );

// Attributes for Umami's built-in click tracking. Only for links that open a
// new tab or leave the site: on same-tab links the tracker cancels the click
// and navigates itself, turning Next's client-side routing into full reloads.
export function eventAttributes(name: AnalyticsEvent, data: EventData = {}) {
  return {
    "data-umami-event": name,
    ...Object.fromEntries(
      Object.entries(compact(data)).map(([key, value]) => [
        `data-umami-event-${key}`,
        value,
      ]),
    ),
  };
}

// For same-tab links: track from onClick and let Next handle the navigation.
export function trackEvent(name: AnalyticsEvent, data: EventData = {}) {
  window.umami?.track(name, compact(data));
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
