"use client";

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 })
  }

  const currentYear = new Date().getFullYear()
  const startDate = `${currentYear - 1}-01-01`
  const endDate = `${currentYear}-12-31`

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  const variables = {
    username,
    from: startDate,
    to: endDate
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }

    const data = await response.json()

    if (data.errors) {
      throw new Error(data.errors[0].message)
    }

    const contributions = data.data.user.contributionsCollection.contributionCalendar.weeks
      .flatMap((week: any) => week.contributionDays)
      .map((day: any) => ({
        date: day.date,
        count: day.contributionCount
      }))

    return NextResponse.json({ contributions })
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub contributions' }, { status: 500 })
  }
}

