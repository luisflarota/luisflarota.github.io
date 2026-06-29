import { notFound } from "next/navigation"
import { getEntry, allSlugs } from "@/lib/content"
import { Article } from "@/components/article"

export const dynamicParams = false

export function generateStaticParams() {
  return allSlugs("books")
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = getEntry("books", params.slug)
  return { title: entry?.title ?? "Books" }
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const entry = getEntry("books", params.slug)
  if (!entry) notFound()
  return <Article entry={entry} backHref="/books" backLabel="books" />
}
