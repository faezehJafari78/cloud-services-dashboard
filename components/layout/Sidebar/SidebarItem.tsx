import { ReactNode } from "react";
import clsx from "clsx";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  isCollapsed: boolean;
}

export function SidebarItem({ icon, label, isCollapsed }: SidebarItemProps) {
  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center rounded-md px-3 py-2 text-sm transition-all duration-200",
        "text-gray-300 hover:bg-gray-800 hover:text-white",
        isCollapsed ? "justify-center" : "justify-start gap-3",
      )}
    >
      {icon}

      <span
        className={clsx(
          "transition-all duration-200 whitespace-nowrap",
          isCollapsed ? "w-0 overflow-hidden opacity-0" : "opacity-100",
        )}
      >
        {label}
      </span>
    </div>
  );
}
