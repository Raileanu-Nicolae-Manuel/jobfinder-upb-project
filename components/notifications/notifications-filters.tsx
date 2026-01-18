"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

const notificationTypes = [
  { id: "messages", label: "Messages", count: 3 },
  { id: "applications", label: "Application Updates", count: 4 },
  { id: "interviews", label: "Interview Invites", count: 1 },
  { id: "jobs", label: "Job Matches", count: 5 },
  { id: "reminders", label: "Reminders", count: 2 },
]

export function NotificationsFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Filter by Status</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="font-normal cursor-pointer">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unread" id="unread" />
              <Label htmlFor="unread" className="font-normal cursor-pointer">Unread only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="read" id="read" />
              <Label htmlFor="read" className="font-normal cursor-pointer">Read</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Notification Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notificationTypes.map((type) => (
              <div key={type.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id={type.id} defaultChecked />
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

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Time Period</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="all-time">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="today" id="today" />
              <Label htmlFor="today" className="font-normal cursor-pointer">Today</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="week" id="week" />
              <Label htmlFor="week" className="font-normal cursor-pointer">This week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="month" id="month" />
              <Label htmlFor="month" className="font-normal cursor-pointer">This month</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all-time" id="all-time" />
              <Label htmlFor="all-time" className="font-normal cursor-pointer">All time</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full gap-2 bg-transparent">
        <Settings className="h-4 w-4" />
        Notification Settings
      </Button>
    </div>
  )
}
