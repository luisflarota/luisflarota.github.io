"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/projects", label: "projects" },
  { href: "/books", label: "books" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="mb-12 flex items-center justify-between">
      <Link
        href="/"
        className="text-base font-bold text-neutral-900 no-underline"
      >
        luis larota
      </Link>
      <nav className="flex items-center gap-5 text-sm">
        {nav.map((n) => {
          const active = pathname === n.href || pathname.startsWith(n.href + "/")
          return (
            <Link
              key={n.href}
              href={n.href}
              className={
                active
                  ? "text-accent-dark underline decoration-accent-dark underline-offset-4"
                  : "nav-link"
              }
            >
              {n.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
