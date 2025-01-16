"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FunnyError } from "@/components/funny-error"

// This would typically come from your Kindle API integration
const sampleHighlights = [
  {
    id: 1,
    book: "The Pragmatic Programmer",
    highlight: "Don't live with broken windows",
    date: "2023-12-01",
  },
  {
    id: 2,
    book: "Clean Code",
    highlight: "The only way to go fast is to go well",
    date: "2023-12-15",
  },
]

export default function KindleLibraryPage() {
  const [isErrorOpen, setIsErrorOpen] = useState(false)

  const handleHighlightClick = () => {
    setIsErrorOpen(true)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Kindle Library</h1>
      <div className="grid gap-6">
        {sampleHighlights.map((highlight) => (
          <Card key={highlight.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={handleHighlightClick}>
            <CardHeader>
              <CardTitle>{highlight.book}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{highlight.highlight}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {new Date(highlight.date).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <FunnyError isOpen={isErrorOpen} onClose={() => setIsErrorOpen(false)} />
    </div>
  )
}

