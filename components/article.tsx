import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeHighlight from "rehype-highlight"
import "katex/dist/katex.min.css"
import "highlight.js/styles/github.css"
import type { Entry } from "@/lib/content"
import { formatDate } from "@/lib/format"

// Cast to any: remark/rehype plugin types drift between versions and trip the
// next build type-check; the runtime shape is correct.
const mdxOptions: any = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeHighlight],
  },
}

export function Article({
  entry,
  backHref,
  backLabel,
}: {
  entry: Entry
  backHref: string
  backLabel: string
}) {
  const isBook = entry.collection === "books"
  return (
    <article>
      <Link
        href={backHref}
        className="text-sm text-neutral-400 no-underline transition-colors hover:text-accent-dark"
      >
        ← {backLabel}
      </Link>

      <header className="mb-8 mt-6">
        <p className="mb-2 text-sm text-neutral-400">
          {isBook && entry.author ? entry.author : formatDate(entry.date)}
          {isBook && entry.bookYear ? ` · published ${entry.bookYear}` : ""}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-neutral-900">
          {entry.title}
        </h1>
        {entry.description ? (
          <p className="mt-3 text-neutral-500">{entry.description}</p>
        ) : null}
      </header>

      <div className="prose prose-neutral max-w-none font-mono prose-headings:font-mono prose-headings:font-bold prose-a:text-accent-dark prose-pre:border prose-pre:border-neutral-200 prose-pre:bg-neutral-50 prose-pre:text-neutral-800">
        {entry.format === "tex" ? (
          <p className="not-prose rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            LaTeX (.tex) rendering is being wired up — this entry will render as
            HTML in the page shortly.
          </p>
        ) : (
          <MDXRemote source={entry.content} options={mdxOptions} />
        )}
      </div>
    </article>
  )
}
