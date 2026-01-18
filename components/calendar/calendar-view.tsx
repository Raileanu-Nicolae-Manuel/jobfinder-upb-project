"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const events = [
  { date: 15, type: "interview", title: "TechCorp Interview", time: "10:00 AM" },
  { date: 18, type: "interview", title: "DesignStudio Call", time: "2:00 PM" },
  { date: 20, type: "deadline", title: "Application Deadline", time: "11:59 PM" },
  { date: 22, type: "followup", title: "Follow-up Email", time: "9:00 AM" },
  { date: 25, type: "interview", title: "Final Round - InnovateTech", time: "3:30 PM" },
]

const eventColors = {
  interview: "bg-primary",
  deadline: "bg-destructive",
  followup: "bg-warning",
}

export function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 0, 1)) // January 2024

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  
  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const monthName = currentMonth.toLocaleString("default", { month: "long" })

  // Generate calendar days
  const calendarDays = []
  
  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      events: [],
    })
  }
  
  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = events.filter((e) => e.date === day)
    calendarDays.push({
      day,
      isCurrentMonth: true,
      events: dayEvents,
    })
  }
  
  // Next month days
  const remainingDays = 42 - calendarDays.length // 6 rows * 7 days
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: false,
      events: [],
    })
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-foreground">
              {monthName} {year}
            </h2>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Event
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Days of week header */}
        <div className="grid grid-cols-7 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-sm font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 border-t border-l border-border">
          {calendarDays.map((item, index) => {
            const isToday = item.day === 15 && item.isCurrentMonth // Mock today as 15th
            return (
              <div
                key={index}
                className={cn(
                  "min-h-24 p-2 border-r border-b border-border",
                  !item.isCurrentMonth && "bg-muted/30"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-7 h-7 text-sm rounded-full mb-1",
                    isToday && "bg-primary text-primary-foreground font-semibold",
                    !item.isCurrentMonth && "text-muted-foreground"
                  )}
                >
                  {item.day}
                </div>
                <div className="space-y-1">
                  {item.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={cn(
                        "text-xs px-1.5 py-0.5 rounded truncate text-white cursor-pointer hover:opacity-80 transition-opacity",
                        eventColors[event.type as keyof typeof eventColors]
                      )}
                      title={`${event.title} - ${event.time}`}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
