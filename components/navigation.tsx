"use client";

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold">
            luisflarota
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex space-x-2 font-mono text-sm">
              <Button
                variant={pathname === "/kindle-library" ? "secondary" : "ghost"}
                asChild
                className="whitespace-nowrap"
              >
                <Link href="/kindle-library">Kindle Library</Link>
              </Button>
              <Button
                variant={pathname === "/posts" ? "secondary" : "ghost"}
                asChild
              >
                <Link href="/posts">Posts</Link>
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

