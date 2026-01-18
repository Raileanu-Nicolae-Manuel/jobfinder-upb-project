"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  ImageIcon,
} from "lucide-react"
import Link from "next/link"

const posts = [
  {
    id: 1,
    content: "We're excited to announce that TechCorp has been recognized as one of the Best Places to Work in 2024! Thank you to our amazing team for making this possible.",
    image: "/placeholder-post.jpg",
    likes: 234,
    comments: 45,
    shares: 12,
    time: "2 hours ago",
  },
  {
    id: 2,
    content: "Looking for talented developers to join our growing team! We're hiring for multiple positions including Frontend, Backend, and DevOps engineers. Check out our open positions!",
    image: null,
    likes: 156,
    comments: 28,
    shares: 34,
    time: "1 day ago",
  },
  {
    id: 3,
    content: "Our team just launched a new feature that helps developers deploy faster. Check out the blog post for more details!",
    image: "/placeholder-post.jpg",
    likes: 189,
    comments: 32,
    shares: 21,
    time: "3 days ago",
  },
]

export function CompanyFeed() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Company Posts</CardTitle>
        <Button asChild>
          <Link href="/business/posts/new">Create Post</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 rounded-lg">
                  <AvatarImage src="/placeholder-company.jpg" alt="TechCorp" />
                  <AvatarFallback className="rounded-lg bg-primary/10 text-primary">TC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm text-foreground">TechCorp Inc.</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            {/* Post Content */}
            <p className="text-sm text-foreground leading-relaxed mb-3">
              {post.content}
            </p>

            {/* Post Image */}
            {post.image && (
              <div className="rounded-lg overflow-hidden bg-secondary mb-3 aspect-video flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-muted-foreground" />
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="h-4 w-4" />
                <span>{post.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
