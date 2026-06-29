const links = [
  { label: "github", href: "https://github.com/luisflarota", display: "github.com/luisflarota" },
  { label: "x", href: "https://x.com/luisflarota", display: "x.com/luisflarota" },
  { label: "linkedin", href: "https://www.linkedin.com/in/lflarota/", display: "in/lflarota" },
  { label: "substack", href: "https://substack.com/@lflarota", display: "substack.com/@lflarota" },
  { label: "email", href: "mailto:fernando.larota@gmail.com", display: "fernando.larota@gmail.com" },
]

export function SiteFooter() {
  return (
    <footer className="mt-16 space-y-2 text-sm text-neutral-500">
      {links.map((l) => (
        <div key={l.label} className="flex items-baseline gap-3">
          <span className="shrink-0">{l.label}</span>
          <span className="dotted-rule -translate-y-[3px] flex-1" />
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 truncate text-neutral-700 no-underline hover:text-accent-dark"
          >
            {l.display}
          </a>
        </div>
      ))}
    </footer>
  )
}
