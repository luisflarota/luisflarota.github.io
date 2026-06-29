# Adding content

Everything on the site (projects + books) is generated from Markdown/MDX files
in this `content/` folder. To add something, **drop a new file in the right
subfolder and commit** — the list page, the detail page, the URL, and the home
page all update automatically. No code changes needed.

```
content/
  projects/   -> /projects   (right now: just Pseudoflow + the thesis)
  books/      -> /books
```

## File naming

`YYYY-MM-DD-some-slug.mdx`

- The **date prefix** sets the entry's date and how it sorts (newest first).
- The **rest** becomes the URL, e.g.
  `books/2026-01-05-the-pragmatic-programmer.mdx` → `/books/the-pragmatic-programmer`.

## Add a book

Create `content/books/YYYY-MM-DD-<slug>.mdx`:

```mdx
---
title: "Book Title"
author: "Author Name"
bookYear: 1999        # year the BOOK was published (shown in parentheses)
date: 2026-01-05      # YOUR write-up date (shown on the right + sorts the list)
description: "One sentence — your take, shown under the title in the list."
---

Your full write-up goes here. Plain Markdown:

- bullet points
- **bold**, *italic*, [links](https://example.com)
- > blockquotes for passages worth keeping
```

That gives you exactly the list layout you wanted:
**Book Title (1999)** · 2026 · *your one-liner* → click → full write-up.

## Add a project

Create `content/projects/YYYY-MM-DD-<slug>.mdx`:

```mdx
---
title: "Project Name"
date: 2024-05-01
tags: ["Mining / OR", "ML"]   # optional — these become the filter tabs
description: "One sentence shown under the title in the list."
---

What it does, how it works, results. Then links at the bottom:

- [Code on GitHub](https://github.com/luisflarota/your-repo)
- [Live demo](https://your-demo-url)
```

## Math and code (works in any entry)

**Math** — write LaTeX inline with `$...$` or as a block with `$$...$$`:

```text
inline: $g_c = \frac{C_m + C_p}{P \cdot R}$

block:
$$
v_i = (P - C_t)\,R\,g_i\,T_i - (C_m + C_p)\,T_i
$$
```

**Code** — fenced blocks get syntax highlighting; put the language after the
backticks (` ```python `, ` ```ts `, etc.).

**Tables, blockquotes, links, lists** — standard Markdown, all supported.

## Preview locally

```bash
npm run dev          # http://localhost:3000  (add `-- -p 3001` for another port)
```

The page hot-reloads as you edit. When you push to `main`, GitHub Actions
builds the static site and deploys it.

## Notes

- Avoid a stray `$` in prose (it starts math). Write "USD" instead of a dollar
  sign, or escape it as `\$`.
- `.tex` files (raw LaTeX → rendered as HTML, not a PDF) are coming — for now
  author in `.mdx` with `$...$` math, which covers almost everything.
