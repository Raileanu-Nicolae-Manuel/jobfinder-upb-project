"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const jobTypes = [
  { id: "full-time", label: "Full-time", count: 1234 },
  { id: "part-time", label: "Part-time", count: 456 },
  { id: "contract", label: "Contract", count: 321 },
  { id: "internship", label: "Internship", count: 89 },
  { id: "freelance", label: "Freelance", count: 234 },
]

const experienceLevels = [
  { id: "entry", label: "Entry Level", count: 567 },
  { id: "mid", label: "Mid Level", count: 890 },
  { id: "senior", label: "Senior Level", count: 654 },
  { id: "lead", label: "Lead / Manager", count: 234 },
  { id: "executive", label: "Executive", count: 78 },
]

const remoteOptions = [
  { id: "remote", label: "Remote Only", count: 789 },
  { id: "hybrid", label: "Hybrid", count: 567 },
  { id: "onsite", label: "On-site", count: 1234 },
]

const postedWithin = [
  { id: "24h", label: "Last 24 hours", count: 156 },
  { id: "7d", label: "Last 7 days", count: 678 },
  { id: "30d", label: "Last 30 days", count: 1890 },
  { id: "any", label: "Any time", count: 2456 },
]

export function JobSearchFilters() {
  return (
    <Card className="sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">Filters</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary text-xs">
          Clear All
        </Button>
      </CardHeader>
      <CardContent className="space-y-1 pb-6">
        {/* Active Filters */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <Badge variant="secondary" className="gap-1 pr-1">
            Remote
            <button className="ml-1 rounded-full hover:bg-muted-foreground/20">
              <X className="h-3 w-3" />
            </button>
          </Badge>
          <Badge variant="secondary" className="gap-1 pr-1">
            Full-time
            <button className="ml-1 rounded-full hover:bg-muted-foreground/20">
              <X className="h-3 w-3" />
            </button>
          </Badge>
        </div>

        <Accordion type="multiple" defaultValue={["type", "experience", "remote", "salary"]} className="space-y-2">
          {/* Job Type */}
          <AccordionItem value="type" className="border-none">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Job Type
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <div key={type.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id={type.id} />
                      <Label htmlFor={type.id} className="text-sm font-normal cursor-pointer">
                        {type.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">{type.count}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Experience Level */}
          <AccordionItem value="experience" className="border-none">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Experience Level
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <div className="space-y-2">
                {experienceLevels.map((level) => (
                  <div key={level.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id={level.id} />
                      <Label htmlFor={level.id} className="text-sm font-normal cursor-pointer">
                        {level.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">{level.count}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Remote Options */}
          <AccordionItem value="remote" className="border-none">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Work Location
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <div className="space-y-2">
                {remoteOptions.map((option) => (
                  <div key={option.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id={option.id} />
                      <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">{option.count}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Salary Range */}
          <AccordionItem value="salary" className="border-none">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Salary Range
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <div className="space-y-4">
                <Slider
                  defaultValue={[50, 200]}
                  max={300}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">$50k</span>
                  <span className="text-muted-foreground">$200k+</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Date Posted */}
          <AccordionItem value="posted" className="border-none">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              Date Posted
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <div className="space-y-2">
                {postedWithin.map((option) => (
                  <div key={option.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id={option.id} />
                      <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">{option.count}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button className="w-full mt-4">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  )
}
