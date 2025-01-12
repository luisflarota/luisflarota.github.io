'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContributionDay {
  date: string
  count: number
}

export function GitHubContributions({ username }: { username: string }) {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch(`/api/github-contributions?username=${username}`)
        if (!response.ok) {
          throw new Error('Failed to fetch contributions')
        }
        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setContributions(data.contributions)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      }
    }

    fetchContributions()
  }, [username])

  const maxContributions = Math.max(...contributions.map(day => day.count))

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">gitHub contributions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">Error: {error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {contributions.map((day, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-sm ${getColorClass(day.count, maxContributions)}`}
              title={`${day.date}: ${day.count} contributions`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function getColorClass(count: number, maxCount: number): string {
  const intensity = count / maxCount
  if (intensity === 0) return 'bg-gray-200 dark:bg-gray-800'
  if (intensity <= 0.25) return 'bg-green-200 dark:bg-green-900'
  if (intensity <= 0.5) return 'bg-green-300 dark:bg-green-700'
  if (intensity <= 0.75) return 'bg-green-400 dark:bg-green-600'
  return 'bg-green-500 dark:bg-green-500'
}

