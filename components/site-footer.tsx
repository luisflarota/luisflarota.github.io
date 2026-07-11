const links = [
  { label: "github", href: "https://github.com/luisflarota" },
  { label: "x", href: "https://x.com/luisflarota" },
  { label: "linkedin", href: "https://www.linkedin.com/in/lflarota/" },
  { label: "substack", href: "https://substack.com/@lflarota" },
  { label: "email", href: "mailto:fernando.larota@gmail.com" },
]

// Pinned to the viewport bottom so the links stay visible while scrolling. The
// gradient lets page content fade out under the row instead of hitting a hard
// bar; pointer-events are re-enabled only on the links themselves.
export function SiteFooter() {
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-white via-white to-transparent">
      <div className="layout">
        <div className="pointer-events-auto flex flex-wrap items-center gap-x-3 gap-y-1 pb-6 pt-10 text-sm text-neutral-400">
          {links.map((l, i) => (
            <span key={l.label} className="flex items-center gap-x-3">
              {i > 0 ? <span aria-hidden>·</span> : null}
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 no-underline transition-colors hover:text-accent-dark"
              >
                {l.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
