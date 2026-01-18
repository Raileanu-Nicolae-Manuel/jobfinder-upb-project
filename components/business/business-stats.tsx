import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Eye, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Active Job Listings",
    value: "8",
    change: "+2 this week",
    icon: Briefcase,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Total Applicants",
    value: "342",
    change: "+45 this week",
    icon: Users,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "Profile Views",
    value: "1,234",
    change: "+18% vs last week",
    icon: Eye,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    label: "Hire Rate",
    value: "23%",
    change: "+5% vs last month",
    icon: TrendingUp,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
]

export function BusinessStats() {
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
