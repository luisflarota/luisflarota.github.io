"use client"

import { useState } from "react"

export function LunaWord() {
  const [show, setShow] = useState(false)
  return (
    <span className="relative">
      <span
        className="cursor-pointer underline decoration-dotted decoration-neutral-400 underline-offset-4 hover:text-accent-dark"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow((v) => !v)}
      >
        luna
      </span>
      {show ? (
        <span className="pointer-events-none fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/luna.jpeg"
            alt="Luna"
            className="max-h-[70vh] max-w-[80vw] rounded-lg border border-neutral-200 shadow-2xl"
          />
        </span>
      ) : null}
    </span>
  )
}
