"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const eventTypes = [
  { id: "interviews", label: "Interviews", color: "bg-primary", count: 3 },
  { id: "deadlines", label: "Deadlines", color: "bg-destructive", count: 1 },
  { id: "followups", label: "Follow-ups", color: "bg-warning", count: 1 },
  { id: "reminders", label: "Reminders", color: "bg-info", count: 0 },
]

export function CalendarFilters() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Event Types</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {eventTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={type.id} defaultChecked />
                <div className={`w-3 h-3 rounded-sm ${type.color}`} />
                <Label htmlFor={type.id} className="text-sm font-normal cursor-pointer">
                  {type.label}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">{type.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
