"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bookmark,
  BookmarkCheck,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Briefcase,
  ChevronLeft,
  ChevronRight,
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
    applicants: 24,
    description: "We are looking for a Senior Frontend Developer to join our growing team...",
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
    applicants: 56,
    description: "Join our design team to create beautiful user experiences...",
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
    applicants: 89,
    description: "Build scalable backend systems for our data platform...",
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
    applicants: 34,
    description: "Help us build and maintain our cloud infrastructure...",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "InnovateTech",
    companyLogo: "/placeholder-company.jpg",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    posted: "3 days ago",
    tags: ["React", "Node.js", "MongoDB"],
    isNew: false,
    applicants: 112,
    description: "Work on exciting full-stack projects in a fast-paced environment...",
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppWorks",
    companyLogo: "/placeholder-company.jpg",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $150k",
    posted: "4 days ago",
    tags: ["React Native", "iOS", "Android"],
    isNew: false,
    applicants: 67,
    description: "Build cross-platform mobile applications using React Native...",
  },
]

export function JobSearchResults() {
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  const toggleSave = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    )
  }

  return (
    <div className="space-y-4">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">1-6</span> of{" "}
          <span className="font-medium text-foreground">2,456</span> jobs
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[140px] h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="date">Date Posted</SelectItem>
              <SelectItem value="salary-high">Salary: High to Low</SelectItem>
              <SelectItem value="salary-low">Salary: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-3">
        {jobs.map((job) => {
          const isSaved = savedJobs.includes(job.id)
          return (
            <Card key={job.id} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <Link href={`/jobs/${job.id}`} className="block">
                  <div className="flex gap-4">
                    <Avatar className="h-14 w-14 rounded-lg shrink-0">
                      <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                      <AvatarFallback className="rounded-lg bg-primary/10 text-primary">
                        {job.company.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            {job.isNew && (
                              <Badge className="bg-success text-success-foreground text-xs">
                                New
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>{job.company}</span>
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

                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
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

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {job.applicants} applicants
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 bg-transparent">
          2
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 bg-transparent">
          3
        </Button>
        <span className="text-muted-foreground px-2">...</span>
        <Button variant="outline" size="sm" className="h-8 w-8 bg-transparent">
          42
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
