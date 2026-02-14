"use client";

import { useUIStore } from "@/store/ui-store";
import { SIDEBAR_NAV_ITEMS } from "@/mocks/navigation";
import { SidebarItem } from "./SidebarItem";
import clsx from "clsx";

export function Sidebar() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <>
      <div
        onClick={toggleSidebar}
        className={clsx(
          "fixed inset-0 z-30 bg-black/40 transition-opacity md:hidden",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />

      <aside
        className={clsx(
          "fixed left-0 top-0 z-40 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "w-64",
          "md:static md:translate-x-0",
          isSidebarOpen ? "md:w-64" : "md:w-20",
        )}
      >
        <div className="flex h-full flex-col p-4">
          <div
            className={clsx(
              "mb-8 flex items-center transition-all duration-300",
              isSidebarOpen ? "justify-start" : "justify-center",
            )}
          >
            <span className="text-xl font-bold">
              {isSidebarOpen ? "Cloud Panel" : "CP"}
            </span>
          </div>

          <nav className="flex flex-1 flex-col gap-2">
            {SIDEBAR_NAV_ITEMS.map((item) => (
              <SidebarItem
                key={item.label}
                icon={<item.icon size={20} />}
                label={item.label}
                isCollapsed={!isSidebarOpen}
              />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
