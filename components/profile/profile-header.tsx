"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Mail, 
  Phone, 
  Link as LinkIcon, 
  Pencil,
  CheckCircle2,
  Briefcase
} from "lucide-react"

export function ProfileHeader() {
  return (
    <Card className="overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-primary to-primary/70" />
      
      <CardContent className="relative pt-0">
        {/* Avatar */}
        <div className="absolute -top-16 left-6">
          <Avatar className="h-32 w-32 border-4 border-card">
            <AvatarImage src="/placeholder-avatar.jpg" alt="John Smith" />
            <AvatarFallback className="text-3xl bg-primary/10 text-primary">JS</AvatarFallback>
          </Avatar>
        </div>

        {/* Edit Button */}
        <div className="flex justify-end pt-4">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Pencil className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* User Info */}
        <div className="mt-8 space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-foreground">John Smith</h1>
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground">Senior Frontend Developer</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              San Francisco, California, USA
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              TechCorp Inc.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href="mailto:john.smith@email.com" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              john.smith@email.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +1 (234) 567-890
            </a>
            <a href="https://johnsmith.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <LinkIcon className="h-4 w-4" />
              johnsmith.dev
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge className="bg-success/10 text-success hover:bg-success/20">Open to Work</Badge>
            <Badge variant="secondary">Remote</Badge>
            <Badge variant="secondary">Full-time</Badge>
            <Badge variant="secondary">$120k - $160k</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
