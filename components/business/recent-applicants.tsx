import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const recentApplicants = [
  {
    id: 1,
    name: "John Smith",
    role: "Senior Frontend Developer",
    avatar: "/placeholder-avatar.jpg",
    appliedFor: "Senior Frontend Developer",
    time: "2 hours ago",
    match: 95,
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Product Designer",
    avatar: "/placeholder-avatar.jpg",
    appliedFor: "Product Designer",
    time: "5 hours ago",
    match: 88,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Full Stack Developer",
    avatar: "/placeholder-avatar.jpg",
    appliedFor: "Backend Engineer",
    time: "1 day ago",
    match: 82,
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "DevOps Engineer",
    avatar: "/placeholder-avatar.jpg",
    appliedFor: "DevOps Engineer",
    time: "1 day ago",
    match: 79,
  },
  {
    id: 5,
    name: "David Lee",
    role: "Frontend Developer",
    avatar: "/placeholder-avatar.jpg",
    appliedFor: "Senior Frontend Developer",
    time: "2 days ago",
    match: 75,
  },
]

export function RecentApplicants() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-base font-semibold">Recent Applicants</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary" asChild>
          <Link href="/business/applicants">View All</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentApplicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex items-start gap-3 rounded-lg p-3 hover:bg-secondary/50 transition-colors cursor-pointer"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={applicant.avatar || "/placeholder.svg"} alt={applicant.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-sm">
                {applicant.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-sm text-foreground truncate">
                  {applicant.name}
                </p>
                <Badge variant="secondary" className="bg-success/10 text-success text-xs shrink-0">
                  {applicant.match}%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground truncate">{applicant.role}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Applied for: {applicant.appliedFor}
              </p>
              <p className="text-xs text-muted-foreground">{applicant.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
