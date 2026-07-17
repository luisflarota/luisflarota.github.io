import Link from "next/link"
import type { AnchorHTMLAttributes } from "react"

// Custom renderers for elements produced by MDX content. Passed to <MDXRemote>
// so every .mdx entry (books + projects) shares the same link behavior without
// per-link markup in the content files.

function MdxLink({
  href = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^https?:\/\//.test(href)

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  // Internal links (e.g. /books/foo) go through next/link for client routing.
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export const mdxComponents = {
  a: MdxLink,
}
