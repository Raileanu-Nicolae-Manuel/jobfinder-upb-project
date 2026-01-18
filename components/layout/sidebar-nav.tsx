"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Search,
  User,
  Calendar,
  MessageSquare,
  Bell,
  Briefcase,
  Building2,
  FileText,
  Home,
  Settings,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface SidebarNavProps {
  userType: "seeker" | "business"
}

export function SidebarNav({ userType }: SidebarNavProps) {
  const pathname = usePathname()

  const seekerLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/search", label: "Search Jobs", icon: Search },
    { href: "/profile", label: "My Profile", icon: User },
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/messages", label: "Messages", icon: MessageSquare, badge: 3 },
    { href: "/notifications", label: "Notifications", icon: Bell, badge: 5 },
  ]

  const businessLinks = [
    { href: "/business", label: "Dashboard", icon: Building2 },
    { href: "/business/post-job", label: "Post a Job", icon: FileText },
    { href: "/business/posts", label: "Company Posts", icon: Briefcase },
    { href: "/business/messages", label: "Messages", icon: MessageSquare, badge: 8 },
    { href: "/business/notifications", label: "Notifications", icon: Bell, badge: 2 },
  ]

  const links = userType === "seeker" ? seekerLinks : businessLinks

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-sidebar">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">JobFinder</span>
        </div>

        {/* User Info */}
        <div className="border-b border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary/10 text-primary">
                {userType === "seeker" ? "JS" : "TC"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {userType === "seeker" ? "John Smith" : "TechCorp Inc."}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {userType === "seeker" ? "Software Developer" : "Technology Company"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <link.icon className="h-5 w-5 shrink-0" />
                    <span className="flex-1">{link.label}</span>
                    {link.badge && (
                      <Badge 
                        variant="secondary" 
                        className="bg-primary text-primary-foreground h-5 min-w-5 flex items-center justify-center"
                      >
                        {link.badge}
                      </Badge>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mode Switcher */}
        <div className="border-t border-sidebar-border p-4">
          <Link
            href={userType === "seeker" ? "/business" : "/"}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span>Switch to {userType === "seeker" ? "Business" : "Job Seeker"}</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}
