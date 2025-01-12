'use client'

import { useEffect, useState } from 'react'

export function VisitCounter() {
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    const storedVisits = localStorage.getItem('visitCount')
    const currentVisits = storedVisits ? parseInt(storedVisits, 10) + 1 : 1
    localStorage.setItem('visitCount', currentVisits.toString())
    setVisits(currentVisits)
  }, [])

  return (
    <div className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm py-1 px-2 rounded-md inline-block shadow-sm">
      Visits: {visits}
    </div>
  )
}

