'use client'

import { useEffect, useState } from 'react'

export function VisitCounter() {
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    // Get stored visits from localStorage
    const storedVisits = localStorage.getItem('visitCount')
    // Convert to number and increment, or start at 1 if no previous visits
    const currentVisits = storedVisits ? parseInt(storedVisits, 10) + 1 : 1
    // Save back to localStorage
    localStorage.setItem('visitCount', currentVisits.toString())
    // Update state
    setVisits(currentVisits)
  }, [])

  return (
    <div className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm py-1 px-2 rounded-md inline-block shadow-sm">
      Visits: {visits}
    </div>
  )
}

