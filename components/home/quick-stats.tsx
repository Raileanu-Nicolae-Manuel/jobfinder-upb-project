import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Eye, FileCheck, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Applications Sent",
    value: "24",
    change: "+3 this week",
    icon: FileCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Profile Views",
    value: "156",
    change: "+12% vs last week",
    icon: Eye,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    label: "Jobs Saved",
    value: "18",
    change: "5 new matches",
    icon: Briefcase,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    label: "Interview Invites",
    value: "4",
    change: "2 pending response",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
  },
]

export function QuickStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
