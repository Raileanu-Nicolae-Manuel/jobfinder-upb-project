"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", endorsements: 42 },
      { name: "TypeScript", endorsements: 38 },
      { name: "Next.js", endorsements: 35 },
      { name: "JavaScript", endorsements: 45 },
      { name: "HTML/CSS", endorsements: 40 },
      { name: "Tailwind CSS", endorsements: 28 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", endorsements: 25 },
      { name: "GraphQL", endorsements: 20 },
      { name: "REST APIs", endorsements: 30 },
      { name: "PostgreSQL", endorsements: 18 },
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git", endorsements: 35 },
      { name: "CI/CD", endorsements: 22 },
      { name: "Agile/Scrum", endorsements: 28 },
      { name: "Testing (Jest)", endorsements: 24 },
    ],
  },
]

export function ProfileSkills() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Skills</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-sm font-medium text-foreground mb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm gap-2"
                >
                  {skill.name}
                  <span className="text-xs text-muted-foreground">
                    {skill.endorsements}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
