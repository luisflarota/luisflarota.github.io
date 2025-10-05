"use client";

import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

