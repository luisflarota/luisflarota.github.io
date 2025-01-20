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
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            luisflarota.github.io
          </Link>
          <div className="flex items-center space-x-6">
            <div className="space-x-2 font-mono text-sm">
              <Button
                variant={pathname === "/kindle-library" ? "secondary" : "ghost"}
                asChild
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

