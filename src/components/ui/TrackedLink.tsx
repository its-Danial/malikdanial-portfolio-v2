"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { type AnalyticsEvent, trackEvent } from "@/utils/functions";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  eventData?: Record<string, string | null | undefined>;
};

// An internal link that reports a click to Umami without giving up Next's
// client-side navigation (see eventAttributes in utils/functions).
export default function TrackedLink({
  event,
  eventData,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(clickEvent) => {
        trackEvent(event, eventData);
        onClick?.(clickEvent);
      }}
    />
  );
}
