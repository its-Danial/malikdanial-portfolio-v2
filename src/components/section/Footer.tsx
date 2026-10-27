const CREDITS = {
  editor: {
    label: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
  },
  stack: [
    { label: "Next.js", href: "https://nextjs.org/" },
    { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
    { label: "Sanity", href: "https://www.sanity.io/" },
    { label: "Umami", href: "https://umami.is/" },
  ],
  host: { label: "Vercel", href: "https://vercel.com/" },
  font: { label: "Inter", href: "https://rsms.me/inter/" },
};

function CreditLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="font-medium text-secondary-foreground transition-colors hover:text-accent focus-visible:text-accent motion-reduce:transition-none"
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Footer() {
  const { editor, stack, host, font } = CREDITS;
  const last = stack[stack.length - 1];

  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Coded in <CreditLink {...editor} />. Built with{" "}
        {stack.slice(0, -1).map((item) => (
          <span key={item.label}>
            <CreditLink {...item} />,{" "}
          </span>
        ))}
        and <CreditLink {...last} />, deployed with <CreditLink {...host} />.
        All text is set in the <CreditLink {...font} /> typeface.
      </p>
    </footer>
  );
}
