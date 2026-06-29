const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

// "2026-02-10" -> "Feb 10, 2026"
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-")
  if (!m || !d) return iso
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`
}
