import { listEntries } from "@/lib/content"
import { EntryList, type ListItem } from "@/components/entry-list"

export const metadata = { title: "Projects" }

export default function ProjectsPage() {
  const items: ListItem[] = listEntries("projects").map((e) => ({
    slug: e.slug,
    href: `/projects/${e.slug}`,
    title: e.title,
    description: e.description,
    year: e.year,
    tags: e.tags,
  }))

  return (
    <div>
      <h1 className="mb-3 text-3xl font-bold text-neutral-900">projects</h1>
      <p className="mb-10 text-neutral-500">
        things i&apos;ve built — operations research and ml, with something you
        can actually click.
      </p>
      <EntryList items={items} variant="post" />
    </div>
  )
}
