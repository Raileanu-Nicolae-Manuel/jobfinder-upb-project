"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

export function ProfileAbout() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">About</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          Passionate Frontend Developer with 8+ years of experience building modern web applications. 
          I specialize in React, TypeScript, and Next.js, with a strong focus on creating intuitive 
          user experiences and maintainable code. I thrive in collaborative environments and enjoy 
          mentoring junior developers while continuously learning new technologies.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Currently looking for senior or lead positions where I can contribute to impactful products 
          and help build high-performing engineering teams. Interested in companies working on 
          developer tools, productivity software, or innovative consumer applications.
        </p>
      </CardContent>
    </Card>
  )
}
