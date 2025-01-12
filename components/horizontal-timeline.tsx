"use client";

import { ChevronRight } from 'lucide-react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
  },
  {
    company: "South Dakota School of Mines & Technology",
    location: "USA",
    description: "Researched optimization algorithms for fuel dispatching in open pit mines (the math was theoretical – mines aren't ready yet!).",
    date: "Jan. 2022 - June 2023",
    position: "MSc. in Mining Engineering",
    url: "https://www.sdsmt.edu/"
  },
  {
    company: "TiMining & Las Bambas Copper Mine",
    location: "Chile & Peru",
    description: "Added 20% mining knowledge to code in a digital twin at TiMining. At Las Bambas, saw mining engineers as users, not creators!",
    date: "Nov. 2020 - Jan. 2022",
    position: "Data Engineer & Graduate Mining Engineer",
    url: "https://www.timining.com/"
  },
  {
    company: "Pontifical Catholic University & Catholic University",
    location: "Chile",
    description: "Tire degradation research - started on sustainability journey!",
    date: "July 2017 - Dec. 2017",
    position: "Exchange Student",
    url: "https://www.uc.cl/en"
  }
]

export function HorizontalTimeline() {
  return (
    <TooltipProvider>
      <div className="w-full space-y-6">
        <div className="text-center">
          <div className="mb-2 h-0.5 w-32 bg-primary/20 mx-auto" />
          <h2 className="text-xl font-bold">My Career</h2>
        </div>
        <ScrollArea className="w-full pb-4">
          <div className="flex items-center space-x-4 px-4">
            {timelineData.map((entry, index) => (
              <div key={index} className="flex items-center space-x-4 flex-shrink-0">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="w-64 p-4 bg-background border rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                      <h3 className="font-semibold text-sm">
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
                      </h3>
                      <p className="text-xs font-medium">{entry.position}</p>
                      <p className="text-xs text-muted-foreground">{entry.date}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p className="text-sm">{entry.description}</p>
                  </TooltipContent>
                </Tooltip>
                {index !== timelineData.length - 1 && (
                  <ChevronRight className="text-primary w-6 h-6 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </TooltipProvider>
  )
}

