import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    {
      label: "GitHub",
      link: "https://github.com/its-Danial",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/malik-danial-azhar/",
      icon: FaLinkedin,
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/malikdanialazhar/",
      icon: FaInstagram,
    },
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      {socials.map((social) => (
        <li key={social.label} className="shrink-0 text-xs">
          <Link
            className="block hover:text-slate-200"
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${social.label} (opens in a new tab)`}
            title={social.label}
          >
            <span className="sr-only">{social.label}</span>
            <social.icon className="h-6 w-6" aria-label={social.label} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
