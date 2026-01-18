"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Pencil } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyLogo: "/placeholder-company.jpg",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "Jan 2021",
    endDate: "Present",
    duration: "4 yrs",
    description: "Lead frontend development for the company's flagship SaaS product. Architected and implemented a new design system used across all products. Mentored a team of 4 junior developers.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "WebSolutions",
    companyLogo: "/placeholder-company.jpg",
    location: "Los Angeles, CA",
    type: "Full-time",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    duration: "2 yrs 10 mos",
    description: "Developed responsive web applications for enterprise clients. Collaborated with UX team to implement pixel-perfect designs. Improved page load times by 40% through code optimization.",
    skills: ["React", "JavaScript", "Redux", "SCSS"],
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartupHub",
    companyLogo: "/placeholder-company.jpg",
    location: "San Jose, CA",
    type: "Full-time",
    startDate: "Jun 2016",
    endDate: "Feb 2018",
    duration: "1 yr 9 mos",
    description: "Built and maintained client websites using modern JavaScript frameworks. Participated in agile development processes and code reviews.",
    skills: ["JavaScript", "Vue.js", "HTML/CSS", "Node.js"],
  },
]

export function ProfileExperience() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Experience</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="group relative">
            {index < experiences.length - 1 && (
              <div className="absolute left-5 top-14 bottom-0 w-px bg-border" />
            )}
            
            <div className="flex gap-4">
              <Avatar className="h-10 w-10 rounded-lg shrink-0">
                <AvatarImage src={exp.companyLogo || "/placeholder.svg"} alt={exp.company} />
                <AvatarFallback className="rounded-lg bg-primary/10 text-primary text-sm">
                  {exp.company.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} · {exp.type}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.startDate} - {exp.endDate} · {exp.duration}
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
