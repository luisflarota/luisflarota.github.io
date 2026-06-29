import Link from "next/link"

export default function NotFound() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-neutral-900">
        Not found
      </h1>
      <p className="mt-3 text-neutral-500">
        This page is loading or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
      >
        ← Back home
      </Link>
    </div>
  )
}
