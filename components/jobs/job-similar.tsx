import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from "lucide-react"
import Link from "next/link"

const similarJobs = [
  {
    id: 8,
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    salary: "$100k - $130k",
  },
  {
    id: 9,
    title: "React Developer",
    company: "WebAgency",
    location: "New York, NY",
    salary: "$110k - $140k",
  },
  {
    id: 10,
    title: "UI Engineer",
    company: "DesignTech",
    location: "San Francisco, CA",
    salary: "$125k - $155k",
  },
]

export function JobSimilar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Similar Jobs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {similarJobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`} className="block">
            <div className="group flex items-start gap-3 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
              <Avatar className="h-10 w-10 rounded-lg">
                <AvatarImage src="/placeholder-company.jpg" alt={job.company} />
                <AvatarFallback className="rounded-lg bg-primary/10 text-primary text-sm">
                  {job.company.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  {job.title}
                </h4>
                <p className="text-xs text-muted-foreground">{job.company}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{job.salary}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
