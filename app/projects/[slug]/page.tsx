import { notFound } from "next/navigation"
import { getEntry, allSlugs } from "@/lib/content"
import { Article } from "@/components/article"

export const dynamicParams = false

export function generateStaticParams() {
  return allSlugs("projects")
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = getEntry("projects", params.slug)
  return { title: entry?.title ?? "Projects" }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const entry = getEntry("projects", params.slug)
  if (!entry) notFound()
  return <Article entry={entry} backHref="/projects" backLabel="projects" />
}
