import { listEntries } from "@/lib/content"
import { EntryList, type ListItem } from "@/components/entry-list"

export const metadata = { title: "Books" }

export default function BooksPage() {
  const items: ListItem[] = listEntries("books").map((e) => ({
    slug: e.slug,
    href: `/books/${e.slug}`,
    title: e.title,
    description: e.description,
    year: e.year,
    bookYear: e.bookYear,
  }))

  return (
    <div>
      <h1 className="mb-3 text-3xl font-bold text-neutral-900">books</h1>
      <p className="mb-10 text-neutral-500">
        what i&apos;ve read, one line each — click through for the longer take.
      </p>
      <EntryList items={items} variant="book" />
    </div>
  )
}
