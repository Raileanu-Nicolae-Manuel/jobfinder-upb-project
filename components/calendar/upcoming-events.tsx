import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, MapPin, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

const upcomingEvents = [
  {
    id: 1,
    title: "TechCorp Interview",
    company: "TechCorp Inc.",
    date: "Jan 15, 2024",
    time: "10:00 AM - 11:00 AM",
    type: "interview",
    location: "Video Call",
    isVirtual: true,
  },
  {
    id: 2,
    title: "DesignStudio Call",
    company: "DesignStudio",
    date: "Jan 18, 2024",
    time: "2:00 PM - 2:30 PM",
    type: "interview",
    location: "Video Call",
    isVirtual: true,
  },
  {
    id: 3,
    title: "Application Deadline",
    company: "DataFlow Systems",
    date: "Jan 20, 2024",
    time: "11:59 PM",
    type: "deadline",
    location: null,
    isVirtual: false,
  },
  {
    id: 4,
    title: "Follow-up Email",
    company: "CloudScale",
    date: "Jan 22, 2024",
    time: "9:00 AM",
    type: "followup",
    location: null,
    isVirtual: false,
  },
]

const typeStyles = {
  interview: {
    badge: "bg-primary/10 text-primary",
    dot: "bg-primary",
  },
  deadline: {
    badge: "bg-destructive/10 text-destructive",
    dot: "bg-destructive",
  },
  followup: {
    badge: "bg-warning/10 text-warning-foreground",
    dot: "bg-warning",
  },
}

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {upcomingEvents.map((event) => {
          const style = typeStyles[event.type as keyof typeof typeStyles]
          return (
            <div
              key={event.id}
              className="group rounded-lg border border-border p-3 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <div className={cn("w-2 h-2 rounded-full mt-2 shrink-0", style.dot)} />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">{event.title}</h4>
                    <p className="text-xs text-muted-foreground">{event.company}</p>
                  </div>
                </div>
                <Badge variant="secondary" className={cn("text-xs", style.badge)}>
                  {event.type === "interview" ? "Interview" : event.type === "deadline" ? "Deadline" : "Follow-up"}
                </Badge>
              </div>

              <div className="mt-2 ml-4 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{event.time}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    {event.isVirtual ? (
                      <Video className="h-3 w-3" />
                    ) : (
                      <MapPin className="h-3 w-3" />
                    )}
                    <span>{event.location}</span>
                  </div>
                )}
              </div>

              {event.type === "interview" && (
                <div className="mt-3 ml-4 flex gap-2">
                  <Button size="sm" className="h-7 text-xs">
                    Join Call
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
