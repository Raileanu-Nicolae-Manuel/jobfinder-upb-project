"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Pencil } from "lucide-react"

const education = [
  {
    id: 1,
    school: "Stanford University",
    schoolLogo: "/placeholder-school.jpg",
    degree: "Master of Science - MS",
    field: "Computer Science",
    startYear: "2014",
    endYear: "2016",
    description: "Specialized in Human-Computer Interaction and Web Technologies. GPA: 3.9/4.0",
    activities: "Member of ACM, Web Development Club",
  },
  {
    id: 2,
    school: "UC Berkeley",
    schoolLogo: "/placeholder-school.jpg",
    degree: "Bachelor of Science - BS",
    field: "Computer Science",
    startYear: "2010",
    endYear: "2014",
    description: "Dean's List all semesters. Focus on Software Engineering and Data Structures.",
    activities: "Hackathon organizer, Teaching Assistant for CS101",
  },
]

export function ProfileEducation() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Education</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.id} className="group relative">
            {index < education.length - 1 && (
              <div className="absolute left-5 top-14 bottom-0 w-px bg-border" />
            )}
            
            <div className="flex gap-4">
              <Avatar className="h-10 w-10 rounded-lg shrink-0">
                <AvatarImage src={edu.schoolLogo || "/placeholder.svg"} alt={edu.school} />
                <AvatarFallback className="rounded-lg bg-accent/30 text-accent-foreground text-sm">
                  {edu.school.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.degree}, {edu.field}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                {edu.activities && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium">Activities:</span> {edu.activities}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
