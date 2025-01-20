import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Welcome to Luis Larota's Website</h1>
      <p className="text-xl mb-8">The page you're looking for is loading or doesn't exist.</p>
      <Button asChild>
        <Link href="/">Go to Homepage</Link>
      </Button>
    </div>
  )
}

