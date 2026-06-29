import Link from "next/link"
import Image from "next/image"
import { listEntries, type Entry } from "@/lib/content"
import { LunaWord } from "@/components/luna-word"

function Teasers({
  title,
  href,
  items,
  variant,
}: {
  title: string
  href: string
  items: Entry[]
  variant?: "post" | "book"
}) {
  return (
    <section>
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="text-lg font-bold text-neutral-900">{title}</h2>
        <Link
          href={href}
          className="text-sm text-neutral-400 no-underline transition-colors hover:text-accent-dark"
        >
          all {title} →
        </Link>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-neutral-400">coming soon.</p>
      ) : (
        <ul className="space-y-5">
          {items.map((e) => (
            <li key={e.slug}>
              <Link
                href={`/${e.collection}/${e.slug}`}
                className="group block no-underline"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="min-w-0 font-medium text-neutral-900 transition-colors group-hover:text-accent-dark">
                    {e.title}
                    {variant === "book" && e.bookYear ? (
                      <span className="font-normal text-neutral-400">
                        {" "}
                        ({e.bookYear})
                      </span>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-sm text-neutral-400">
                    {e.year}
                  </span>
                </div>
                {e.description ? (
                  <p className="mt-1 text-sm text-neutral-500">
                    {e.description}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function Home() {
  const projects = listEntries("projects")
  const books = listEntries("books").slice(0, 5)

  return (
    <div className="space-y-16">
      <section className="flex items-start gap-5">
        <Image
          src="/avatar.jpg"
          alt="Luis Larota"
          width={72}
          height={72}
          className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
          priority
        />
        <p className="min-w-0 text-[15px] leading-relaxed text-neutral-700">
          from mining rocks in peru to mining data. software engineer at{" "}
          <a
            href="https://tesla.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:text-accent-dark hover:decoration-accent-dark"
          >
            tesla
          </a>{" "}
          — building, refactoring, and (yes, with ai) cleaning up code for supply
          chain. i live in sf with my sister, my brother-in-law, and <LunaWord />.{" "}
          <span className="text-accent-dark">also: my initials spell LLM.</span>
        </p>
      </section>

      <Teasers title="projects" href="/projects" items={projects} />
      <Teasers title="books" href="/books" items={books} variant="book" />
    </div>
  )
}
