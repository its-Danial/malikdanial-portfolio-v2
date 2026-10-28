import { SOCIALS } from "@/utils/constants";
import { eventAttributes } from "@/utils/functions";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ICONS: Record<(typeof SOCIALS)[number]["label"], IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: HiOutlineMail,
};

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      {SOCIALS.map((social) => {
        const Icon = ICONS[social.label];
        const isExternal = social.link.startsWith("http");

        return (
          <li key={social.label} className="shrink-0 text-xs">
            <a
              {...eventAttributes("social-click", { platform: social.label })}
              // Padding grows the tap target to 44px; the negative margin
              // keeps the icons where they were.
              className="-m-2.5 block p-2.5 transition-colors hover:text-foreground focus-visible:text-foreground motion-reduce:transition-none"
              href={social.link}
              title={social.label}
              {...(isExternal && {
                target: "_blank",
                rel: "noreferrer noopener",
              })}
            >
              <span className="sr-only">
                {social.label}
                {isExternal && " (opens in a new tab)"}
              </span>
              <Icon className="h-6 w-6" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
