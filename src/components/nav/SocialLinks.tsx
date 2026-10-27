import { SOCIALS } from "@/utils/constants";
import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ICONS: Record<(typeof SOCIALS)[number]["label"], IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      {SOCIALS.map((social) => {
        const Icon = ICONS[social.label];

        return (
          <li key={social.label} className="shrink-0 text-xs">
            <a
              data-umami-event={`SOCIALS --> ${social.label}`}
              className="block transition-colors hover:text-foreground focus-visible:text-foreground motion-reduce:transition-none"
              href={social.link}
              target="_blank"
              rel="noreferrer noopener"
              title={social.label}
            >
              <span className="sr-only">
                {social.label} (opens in a new tab)
              </span>
              <Icon className="h-6 w-6" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
