export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>{" "}
        Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>
        {", "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        {", "}
        <a
          href="https://www.sanity.io/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Sanity (opens in a new tab)"
        >
          Sanity
        </a>{" "}
        and{" "}
        <a
          href="https://umami.is/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Umami (opens in a new tab)"
        >
          Umami
        </a>{" "}
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
}
