import { ChevronDown } from 'lucide-react'

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

export function VerticalTimeline() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 py-8">
      <div className="text-center">
        <div className="mb-4 h-0.5 w-48 bg-primary/20 mx-auto" />
        <h2 className="text-2xl font-bold">My Career</h2>
      </div>
      <div className="relative">
        {timelineData.map((entry, index) => (
          <div key={index} className="mb-8 flex justify-between items-center">
            <div className="w-5/12 text-right pr-4">
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
              <p className="text-sm text-muted-foreground">{entry.position}</p>
              <p className="text-sm">{entry.date}</p>
            </div>
            <div className="w-2/12 flex justify-center">
              <div className="w-1 bg-primary/20 h-full absolute"></div>
              <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
              {index !== timelineData.length - 1 && (
                <ChevronDown className="text-primary absolute top-6" />
              )}
            </div>
            <div className="w-5/12 pl-4">
              <p className="text-sm">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

