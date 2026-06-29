"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

export type ListItem = {
  slug: string
  href: string
  title: string
  description?: string
  year: string
  tags?: string[]
  bookYear?: string
}

export function EntryList({
  items,
  variant = "post",
}: {
  items: ListItem[]
  variant?: "post" | "book"
}) {
  const tags = useMemo(
    () => Array.from(new Set(items.flatMap((i) => i.tags ?? []))).sort(),
    [items]
  )
  const [active, setActive] = useState("all")
  const filtered =
    active === "all" ? items : items.filter((i) => i.tags?.includes(active))

  return (
    <div>
      {tags.length > 0 ? (
        <div className="mb-10 flex flex-wrap gap-5 text-sm">
          {["all", ...tags].map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={
                active === t
                  ? "text-accent-dark underline decoration-accent-dark underline-offset-4"
                  : "text-neutral-400 transition-colors hover:text-neutral-700"
              }
            >
              {t}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="space-y-6">
        {filtered.map((i) => (
          <li key={i.slug}>
            <Link href={i.href} className="group block no-underline">
              <div className="flex items-baseline justify-between gap-4">
                <span className="min-w-0 font-medium text-neutral-900 transition-colors group-hover:text-accent-dark">
                  {i.title}
                  {variant === "book" && i.bookYear ? (
                    <span className="font-normal text-neutral-400">
                      {" "}
                      ({i.bookYear})
                    </span>
                  ) : null}
                </span>
                <span className="shrink-0 text-sm text-neutral-400">
                  {i.year}
                </span>
              </div>
              {i.description ? (
                <p className="mt-1 text-sm text-neutral-500">{i.description}</p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
