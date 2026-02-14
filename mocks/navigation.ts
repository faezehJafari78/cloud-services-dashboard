import { LayoutDashboard, Server, Database } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  icon: LucideIcon;
  href: string;
}

export const SIDEBAR_NAV_ITEMS: NavigationItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Servers",
    icon: Server,
    href: "/servers",
  },
  {
    label: "Resources",
    icon: Database,
    href: "/resources",
  },
];
