import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const basePath = "/luisflarota.github.io"

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`${basePath}/`} className="text-xl font-bold">
            your.xyz
          </Link>
          <div className="flex items-center space-x-6">
            <div className="space-x-2 font-mono text-sm">
              <Button variant={pathname === `${basePath}/kindle-library` ? "secondary" : "ghost"} asChild>
                <Link href={`${basePath}/kindle-library`}>Kindle Library</Link>
              </Button>
              <Button variant={pathname === `${basePath}/posts` ? "secondary" : "ghost"} asChild>
                <Link href={`${basePath}/posts`}>Posts</Link>
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

