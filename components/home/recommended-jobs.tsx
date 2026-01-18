import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Sparkles } from "lucide-react"
import Link from "next/link"

const recommendedJobs = [
  {
    id: 5,
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "Remote",
    match: 95,
  },
  {
    id: 6,
    title: "React Developer",
    company: "WebSolutions",
    location: "Los Angeles, CA",
    match: 92,
  },
  {
    id: 7,
    title: "Frontend Architect",
    company: "GlobalTech",
    location: "Seattle, WA",
    match: 88,
  },
]

export function RecommendedJobs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-warning" />
          Recommended for You
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendedJobs.map((job) => (
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
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </div>
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success text-xs shrink-0">
                {job.match}% match
              </Badge>
            </div>
          </Link>
        ))}

        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href="/search">See More Recommendations</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
