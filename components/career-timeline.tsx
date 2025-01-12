'use client'

import { Card } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface TimelineEntry {
  company: string
  location: string
  description: string
  date: string
  position: string
  url?: string
}

const timelineData: TimelineEntry[] = [
  {
    company: "Tesla Inc",
    location: "USA",
    description: "Building data products with the supplier quality engineering team - my journey spans engineering, sustainability and some code!",
    date: "Feb. 2024 - Present",
    position: "Supplier Quality Engineer",
    url: "https://www.tesla.com/"
  },
  {
    company: "Tesla Inc",
    location: "USA",
    description: "Sourcing cathode materials for EV batteries responsibly",
    date: "Sept. 2023 - Dec. 2023",
    position: "Battery Responsible Sourcing Intern",
    url: "https://www.tesla.com/"
  },
  {
    company: "Rio Tinto",
    location: "USA",
    description: "Pushing mine planning to use >1% of their data",
    date: "June 2023 - Aug. 2023",
    position: "Data Engineering Intern",
    url: "https://www.riotinto.com/"
  }
]

export function CareerTimeline() {
  return (
    <div className="w-full space-y-4">
      <div className="text-center">
        <div className="mb-4 h-0.5 w-48 bg-primary/20 mx-auto" />
        <h2 className="text-2xl font-bold">My Career</h2>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
        <div className="flex w-max space-x-4 p-4">
          {timelineData.map((entry, index) => (
            <Card key={index} className="w-[300px] p-4 flex flex-col">
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold">
                  {entry.url ? (
                    <a 
                      href={entry.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {entry.company}
                    </a>
                  ) : (
                    entry.company
                  )}
                  <span className="text-sm text-muted-foreground"> ({entry.location})</span>
                </h3>
                <p className="text-sm text-muted-foreground">{entry.description}</p>
              </div>
              <div className="mt-4 space-y-1 text-sm">
                <p className="font-medium">{entry.date}</p>
                <p className="text-muted-foreground">{entry.position}</p>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

