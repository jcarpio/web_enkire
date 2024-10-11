import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Enkire",
  description:
    "Technology love and passion at the service of the world.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/jcarpio",
    github: "https://github.com/jcarpio",
  },
  mailSupport: "support@enkire.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Enkire OÜ",
    items: [
      // { title: "About", href: "#" },
      // { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
   {
    title: "Projects",
    items: [
      { title: "DremBez", href: "https://www.dreambez.com" },
    ],
   },
  }
];
