import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Users,
  MoreHorizontal,
  Eye,
  Pencil,
  Pause,
  Trash2,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

const activeJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "2 days ago",
    applicants: 24,
    views: 156,
    status: "active",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    posted: "5 days ago",
    applicants: 45,
    views: 234,
    status: "active",
  },
  {
    id: 3,
    title: "Product Designer",
    location: "New York, NY",
    type: "Full-time",
    posted: "1 week ago",
    applicants: 32,
    views: 189,
    status: "active",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Remote",
    type: "Contract",
    posted: "2 weeks ago",
    applicants: 18,
    views: 98,
    status: "paused",
  },
]

export function ActiveJobListings() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Active Job Listings</CardTitle>
        <Button asChild>
          <Link href="/business/post-job">Post New Job</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activeJobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Link 
                    href={`/business/jobs/${job.id}`}
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {job.title}
                  </Link>
                  <Badge
                    variant="secondary"
                    className={
                      job.status === "active"
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning-foreground"
                    }
                  >
                    {job.status === "active" ? "Active" : "Paused"}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span>{job.type}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {job.posted}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">{job.applicants}</span>
                    <span className="text-muted-foreground">applicants</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">{job.views}</span>
                    <span className="text-muted-foreground">views</span>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Applicants
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Pencil className="h-4 w-4 mr-2" />
                      Edit Job
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Pause className="h-4 w-4 mr-2" />
                      {job.status === "active" ? "Pause Listing" : "Resume Listing"}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Job
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
