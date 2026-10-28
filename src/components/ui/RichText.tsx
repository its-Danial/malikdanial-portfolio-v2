import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { cn, eventAttributes } from "@/utils/functions";

type RichTextProps = {
  value: Array<{ _type: string; _key: string }> | null | undefined;
  variant?: "body" | "compact";
};

const linkClassName =
  "font-medium text-foreground underline decoration-border-strong underline-offset-2 transition-colors hover:text-accent hover:decoration-accent focus-visible:text-accent motion-reduce:transition-none";

const sharedComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-foreground">{children}</strong>
    ),
    link: ({ children, value }) => {
      const href: string | undefined = value?.href;
      const isExternal = href?.startsWith("http");

      return (
        <a
          href={href}
          className={linkClassName}
          {...(isExternal && {
            target: "_blank",
            rel: "noreferrer noopener",
            ...eventAttributes("content-link", { url: href }),
          })}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-border-strong">
        {children}
      </ul>
    ),
  },
  // Media blocks are allowed in the schema but have no design on this page yet.
  types: {
    image: () => null,
    file: () => null,
  },
};

const variants: Record<
  NonNullable<RichTextProps["variant"]>,
  PortableTextComponents
> = {
  body: {
    ...sharedComponents,
    block: {
      normal: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
    },
  },
  compact: {
    ...sharedComponents,
    block: {
      normal: ({ children }) => (
        <p className="mt-2 text-sm leading-normal">{children}</p>
      ),
      h3: ({ children }) => (
        <h4 className="mt-3 text-sm font-semibold text-foreground">
          {children}
        </h4>
      ),
      h4: ({ children }) => (
        <h5 className="mt-3 text-sm font-semibold text-secondary-foreground">
          {children}
        </h5>
      ),
      blockquote: ({ children }) => (
        <blockquote className="mt-2 border-l-2 border-border pl-3 text-sm italic">
          {children}
        </blockquote>
      ),
    },
  },
};

export default function RichText({
  value,
  variant = "compact",
}: RichTextProps) {
  if (!value?.length) return null;

  return (
    <div className={cn(variant === "compact" && "text-sm")}>
      <PortableText value={value} components={variants[variant]} />
    </div>
  );
}
