"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"

export function JobSearchHeader() {
  return (
    <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-6">
      <h1 className="text-2xl font-bold text-primary-foreground mb-4">
        Find Your Dream Job
      </h1>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Job title, keywords, or company"
            className="pl-10 bg-card border-none h-12"
          />
        </div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="City, state, or 'Remote'"
            className="pl-10 bg-card border-none h-12"
          />
        </div>
        <Button size="lg" className="h-12 px-8 bg-card text-primary hover:bg-card/90">
          Search Jobs
        </Button>
      </div>
    </div>
  )
}
