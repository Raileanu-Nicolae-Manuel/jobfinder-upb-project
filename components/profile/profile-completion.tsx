"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, ArrowRight } from "lucide-react"

const completionItems = [
  { label: "Add profile photo", completed: true },
  { label: "Write about section", completed: true },
  { label: "Add work experience", completed: true },
  { label: "Add education", completed: true },
  { label: "Add skills", completed: true },
  { label: "Upload resume", completed: true },
  { label: "Add certifications", completed: false },
  { label: "Add portfolio links", completed: false },
]

export function ProfileCompletion() {
  const completedCount = completionItems.filter((item) => item.completed).length
  const totalCount = completionItems.length
  const percentage = Math.round((completedCount / totalCount) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Profile Strength</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">{percentage}% Complete</span>
            <span className="text-sm text-muted-foreground">
              {completedCount}/{totalCount} items
            </span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Completion Items */}
        <ul className="space-y-2">
          {completionItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-sm">
              {item.completed ? (
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
              ) : (
                <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
              )}
              <span
                className={
                  item.completed
                    ? "text-muted-foreground line-through"
                    : "text-foreground"
                }
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {percentage < 100 && (
          <Button variant="outline" className="w-full gap-2 bg-transparent">
            Complete Your Profile
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
