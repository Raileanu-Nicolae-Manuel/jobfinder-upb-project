"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Globe,
  Users,
  Building2,
  Pencil,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export function BusinessHeader() {
  return (
    <Card className="overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-primary via-primary/80 to-accent/70" />
      
      <CardContent className="relative pt-0">
        {/* Logo */}
        <div className="absolute -top-12 left-6">
          <Avatar className="h-24 w-24 border-4 border-card rounded-xl">
            <AvatarImage src="/placeholder-company.jpg" alt="TechCorp Inc." />
            <AvatarFallback className="text-2xl bg-primary/10 text-primary rounded-xl">TC</AvatarFallback>
          </Avatar>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
            <Link href="/business/edit">
              <Pencil className="h-4 w-4" />
              Edit Profile
            </Link>
          </Button>
          <Button size="sm" className="gap-2" asChild>
            <Link href="/business/post-job">
              Post a Job
            </Link>
          </Button>
        </div>

        {/* Company Info */}
        <div className="mt-6 space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-foreground">TechCorp Inc.</h1>
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground">Building the future of developer tools</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              Technology
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              San Francisco, CA
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              201-500 employees
            </span>
            <a 
              href="https://techcorp.example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              techcorp.example.com
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">SaaS</Badge>
            <Badge variant="secondary">Developer Tools</Badge>
            <Badge variant="secondary">B2B</Badge>
            <Badge variant="secondary">Remote-friendly</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
