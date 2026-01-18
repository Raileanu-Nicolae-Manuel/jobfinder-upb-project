"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  MessageSquare,
  Calendar,
  CheckCircle,
  XCircle,
  Eye,
  Bell,
  MoreHorizontal,
  CheckCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "application_viewed",
    title: "Your application was viewed",
    description: "TechCorp Inc. viewed your application for Senior Frontend Developer",
    time: "5 minutes ago",
    isRead: false,
    icon: Eye,
    iconBg: "bg-info/10",
    iconColor: "text-info",
    link: "/jobs/1",
  },
  {
    id: 2,
    type: "message",
    title: "New message from Sarah Johnson",
    description: "Hi John! Thank you for applying to the Senior Frontend Developer position...",
    time: "2 hours ago",
    isRead: false,
    icon: MessageSquare,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    link: "/messages",
    avatar: "/placeholder-avatar.jpg",
    avatarFallback: "SJ",
  },
  {
    id: 3,
    type: "interview_scheduled",
    title: "Interview scheduled",
    description: "Your interview with TechCorp Inc. is scheduled for Monday, Jan 15 at 10:00 AM",
    time: "5 hours ago",
    isRead: false,
    icon: Calendar,
    iconBg: "bg-success/10",
    iconColor: "text-success",
    link: "/calendar",
  },
  {
    id: 4,
    type: "job_match",
    title: "New job match",
    description: "A new job matching your profile has been posted: React Developer at WebAgency",
    time: "1 day ago",
    isRead: true,
    icon: Briefcase,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
    link: "/jobs/9",
  },
  {
    id: 5,
    type: "application_accepted",
    title: "Application moved forward",
    description: "Congratulations! Your application at DesignStudio has been moved to the next stage",
    time: "2 days ago",
    isRead: true,
    icon: CheckCircle,
    iconBg: "bg-success/10",
    iconColor: "text-success",
    link: "/jobs/2",
  },
  {
    id: 6,
    type: "application_rejected",
    title: "Application status update",
    description: "Unfortunately, DataFlow Systems has decided to move forward with other candidates",
    time: "3 days ago",
    isRead: true,
    icon: XCircle,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    link: "/jobs/3",
  },
  {
    id: 7,
    type: "reminder",
    title: "Application deadline reminder",
    description: "The application deadline for CloudScale DevOps Engineer position is in 2 days",
    time: "3 days ago",
    isRead: true,
    icon: Bell,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
    link: "/jobs/4",
  },
]

export function NotificationsList() {
  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <CardTitle className="text-lg font-semibold">All Notifications</CardTitle>
          {unreadCount > 0 && (
            <Badge className="bg-primary">{unreadCount} new</Badge>
          )}
        </div>
        <Button variant="ghost" size="sm" className="text-primary gap-1.5">
          <CheckCheck className="h-4 w-4" />
          Mark all as read
        </Button>
      </CardHeader>
      <CardContent className="space-y-1">
        {notifications.map((notification) => (
          <Link key={notification.id} href={notification.link} className="block">
            <div
              className={cn(
                "group flex items-start gap-4 rounded-lg p-4 hover:bg-secondary/50 transition-colors",
                !notification.isRead && "bg-primary/5"
              )}
            >
              {/* Icon or Avatar */}
              {notification.avatar ? (
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={notification.avatar || "/placeholder.svg"} alt="" />
                  <AvatarFallback className="bg-primary/10 text-primary text-sm">
                    {notification.avatarFallback}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className={cn("rounded-full p-2.5 shrink-0", notification.iconBg)}>
                  <notification.icon className={cn("h-5 w-5", notification.iconColor)} />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className={cn(
                      "text-sm",
                      !notification.isRead ? "font-semibold text-foreground" : "font-medium text-foreground"
                    )}>
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      {notification.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {!notification.isRead && (
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
