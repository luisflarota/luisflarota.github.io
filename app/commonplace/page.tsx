import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export default async function CommonplacePage() {
  // In a real implementation, you would fetch your Kindle highlights here
  // const highlights = await fetchKindleHighlights()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Commonplace Book</h1>
      <div className="grid gap-6">
        {sampleHighlights.map((highlight) => (
          <Card key={highlight.id}>
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
    </div>
  )
}

