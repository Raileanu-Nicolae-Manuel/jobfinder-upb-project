"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  Bookmark, 
  BookmarkCheck, 
  MapPin, 
  Clock, 
  DollarSign,
  Building2,
  Briefcase
} from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyLogo: "/placeholder-company.jpg",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 hours ago",
    tags: ["React", "TypeScript", "Next.js"],
    isNew: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignStudio",
    companyLogo: "/placeholder-company.jpg",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $120k",
    posted: "5 hours ago",
    tags: ["Figma", "UI/UX", "Prototyping"],
    isNew: true,
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    companyLogo: "/placeholder-company.jpg",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    posted: "1 day ago",
    tags: ["Node.js", "PostgreSQL", "AWS"],
    isNew: false,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudScale",
    companyLogo: "/placeholder-company.jpg",
    location: "Austin, TX",
    type: "Contract",
    salary: "$80/hr",
    posted: "2 days ago",
    tags: ["Kubernetes", "Docker", "CI/CD"],
    isNew: false,
  },
]

export function JobFeed() {
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  const toggleSave = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Job Listings</CardTitle>
        <Link href="/search">
          <Button variant="ghost" size="sm" className="text-primary">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {jobs.map((job) => {
          const isSaved = savedJobs.includes(job.id)
          return (
            <Link 
              key={job.id} 
              href={`/jobs/${job.id}`}
              className="block"
            >
              <div className="group relative rounded-lg border border-border p-4 hover:border-primary/50 hover:bg-secondary/50 transition-all">
                {job.isNew && (
                  <Badge className="absolute top-4 right-4 bg-success text-success-foreground">
                    New
                  </Badge>
                )}
                
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                    <AvatarFallback className="rounded-lg bg-primary/10 text-primary">
                      {job.company.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{job.company}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {job.posted}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 h-8 w-8"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleSave(job.id)
                    }}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="h-5 w-5 text-primary" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}
