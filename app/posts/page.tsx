"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FunnyError } from "@/components/funny-error"

const samplePosts = [
  {
    id: 1,
    title: "The Future of AI in Mining",
    excerpt: "Exploring how artificial intelligence is revolutionizing the mining industry...",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Sustainable Practices in Data Centers",
    excerpt: "Examining eco-friendly approaches to managing large-scale data operations...",
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "From Rocks to Data: My Journey",
    excerpt: "A personal reflection on transitioning from traditional mining to data engineering...",
    date: "2024-01-05",
  },
]

export default function PostsPage() {
  const [isErrorOpen, setIsErrorOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handlePostClick = async (postId: number) => {
    try {
      const response = await fetch(`/api/posts/${postId}`)
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch post')
      }
      const post = await response.json()
      console.log('Post data:', post)
    } catch (error) {
      console.error('Error fetching post:', error)
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred')
      setIsErrorOpen(true)
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {samplePosts.map((post) => (
          <Card 
            key={post.id} 
            className="hover:shadow-md transition-shadow cursor-pointer" 
            onClick={() => handlePostClick(post.id)}
          >
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <FunnyError 
        isOpen={isErrorOpen} 
        onClose={() => setIsErrorOpen(false)} 
        errorMessage={errorMessage}
      />
    </div>
  )
}

