import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type Entry = {
  collection: string
  slug: string
  format: "mdx" | "tex"
  date: string // ISO yyyy-mm-dd
  year: string
  title: string
  description?: string
  tags?: string[]
  bookYear?: string // book publication year (books only)
  author?: string // book author (books only)
  content: string
  data: Record<string, unknown>
}

const CONTENT_DIR = path.join(process.cwd(), "content")

function toISODate(value: unknown, fallback?: string): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === "string" && value.trim()) return value.trim().slice(0, 10)
  return fallback ?? ""
}

function parseFile(collection: string, file: string): Entry {
  const full = path.join(CONTENT_DIR, collection, file)
  const raw = fs.readFileSync(full, "utf8")
  const { data, content } = matter(raw)

  const ext = path.extname(file).slice(1).toLowerCase()
  const format: Entry["format"] = ext === "tex" ? "tex" : "mdx"
  const base = file.replace(/\.(mdx|md|tex)$/i, "")
  const match = base.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/)
  const fileDate = match?.[1]

  const slug =
    typeof data.slug === "string" ? data.slug : match ? match[2] : base
  const date = toISODate(data.date, fileDate)

  return {
    collection,
    slug,
    format,
    date,
    year: date.slice(0, 4),
    title: typeof data.title === "string" ? data.title : slug,
    description:
      typeof data.description === "string"
        ? data.description
        : typeof data.summary === "string"
          ? data.summary
          : undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
    bookYear: data.bookYear
      ? String(data.bookYear)
      : data.published
        ? String(data.published)
        : undefined,
    author: typeof data.author === "string" ? data.author : undefined,
    content,
    data,
  }
}

export function listEntries(collection: string): Entry[] {
  const dir = path.join(CONTENT_DIR, collection)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(mdx|md|tex)$/i.test(f))
    .map((f) => parseFile(collection, f))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getEntry(collection: string, slug: string): Entry | null {
  return listEntries(collection).find((e) => e.slug === slug) ?? null
}

export function allSlugs(collection: string): { slug: string }[] {
  return listEntries(collection).map((e) => ({ slug: e.slug }))
}
