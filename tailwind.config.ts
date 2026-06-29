import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // JetBrains Mono is Luis's signature font — used everywhere.
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        // Luis's green, tuned to read on a white background.
        accent: {
          DEFAULT: "#16a34a", // green-600
          dark: "#15803d", // green-700 (hover / active)
        },
      },
      maxWidth: {
        content: "46rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
