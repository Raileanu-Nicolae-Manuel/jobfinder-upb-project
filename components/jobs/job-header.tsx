"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Briefcase,
  Users,
  Bookmark,
  Share2,
  Flag,
} from "lucide-react"

interface JobHeaderProps {
  jobId: string
}

export function JobHeader({ jobId }: JobHeaderProps) {
  // In a real app, you would fetch job data based on jobId
  console.log("Job ID:", jobId)
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Avatar className="h-16 w-16 rounded-xl shrink-0">
            <AvatarImage src="/placeholder-company.jpg" alt="TechCorp Inc." />
            <AvatarFallback className="rounded-xl bg-primary/10 text-primary text-xl">
              TC
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-bold text-foreground">
                    Senior Frontend Developer
                  </h1>
                  <Badge className="bg-success text-success-foreground">New</Badge>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground mt-1">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">TechCorp Inc.</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Flag className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                Full-time
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                $120k - $160k
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Posted 2 hours ago
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                24 applicants
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">GraphQL</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
