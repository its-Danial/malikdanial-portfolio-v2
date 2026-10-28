import { RiArrowRightUpLine } from "react-icons/ri";
import { type AnalyticsEvent, cn, eventAttributes } from "@/utils/functions";

type ExternalLinkProps = {
  href?: string | null;
  title: string;
  linkLabel?: string | null;
  // Stretches the click target over the surrounding card (desktop only).
  outsideClick?: boolean;
  className?: string;
  event?: AnalyticsEvent;
  // Extra Umami event properties, e.g. which section the link is in.
  eventData?: Record<string, string | null | undefined>;
};

export default function ExternalLink({
  href,
  title,
  linkLabel,
  outsideClick,
  className,
  event = "outbound-link",
  eventData,
}: ExternalLinkProps) {
  const label = (
    <span>
      {title}
      {linkLabel && (
        <>
          {" ·"} <span className="whitespace-nowrap">{linkLabel}</span>
        </>
      )}
      {href && (
        <RiArrowRightUpLine
          aria-hidden
          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </span>
  );

  const baseClassName =
    "inline-flex items-baseline text-base font-semibold leading-tight text-foreground";

  if (!href) {
    return <span className={cn(baseClassName, className)}>{label}</span>;
  }

  return (
    <a
      {...eventAttributes(event, {
        title,
        label: linkLabel,
        url: href,
        ...eventData,
      })}
      className={cn(
        "group/link",
        baseClassName,
        "transition-colors hover:text-accent focus-visible:text-accent motion-reduce:transition-none",
        className,
      )}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {outsideClick && (
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      )}
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
