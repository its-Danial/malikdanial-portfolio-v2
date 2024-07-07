import { RiArrowRightUpLine } from "react-icons/ri";

type ExternalLinkProps = {
  href: string;
  ariaLabel: string;
  title: string;
  linkLabel?: string;
  outsideClick?: boolean;
  className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
};

export default function ExternalLink({
  href,
  ariaLabel,
  title,
  linkLabel,
  outsideClick,
  className,
}: ExternalLinkProps) {
  return (
    <a
      className={`group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 ${className ?? ""}`}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${ariaLabel} (opens in a new tab)`}
    >
      {outsideClick && (
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      )}
      <span>
        {title}{" "}
        <span className="inline-block">
          {linkLabel && `· ${linkLabel}`}
          <RiArrowRightUpLine className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
        </span>
      </span>
    </a>
  );
}
