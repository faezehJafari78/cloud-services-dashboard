"use client";

import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useUIStore } from "@/store/ui-store";

export function Header() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="flex h-14 items-center border-b bg-white px-4">
      <button
        onClick={toggleSidebar}
        className="rounded p-2 transition-colors hover:bg-gray-100"
      >
        {/* Mobile */}
        <Menu className="md:hidden" />

        {/* Desktop */}
        {isSidebarOpen ? (
          <PanelLeftClose className="hidden md:block" />
        ) : (
          <PanelLeftOpen className="hidden md:block" />
        )}
      </button>

      <h1 className="ml-4 text-lg font-semibold text-gray-800">
        Cloud Services Dashboard
      </h1>
    </header>
  );
}
