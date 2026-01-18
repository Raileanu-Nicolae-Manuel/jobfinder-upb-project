"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink } from "lucide-react"

export function JobApplicationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Apply Now</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" size="lg">
          Apply with JobFinder
        </Button>
        
        <Button variant="outline" className="w-full gap-2 bg-transparent" size="lg">
          <ExternalLink className="h-4 w-4" />
          Apply on Company Site
        </Button>

        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-medium text-foreground mb-3">
            Your application includes:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Profile information
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Resume (John_Smith_Resume_2024.pdf)
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Contact information
            </li>
          </ul>
        </div>

        <p className="text-xs text-muted-foreground text-center pt-2">
          By applying, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardContent>
    </Card>
  )
}
