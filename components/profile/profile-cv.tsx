"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Download, Eye, Trash2, CheckCircle } from "lucide-react"

export function ProfileCV() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Resume / CV</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current CV */}
        <div className="rounded-lg border border-border p-4 bg-secondary/30">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm text-foreground truncate">
                  John_Smith_Resume_2024.pdf
                </p>
                <CheckCircle className="h-4 w-4 text-success shrink-0" />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Updated Jan 15, 2024 · 245 KB
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent">
              <Eye className="h-4 w-4" />
              View
            </Button>
            <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Upload New */}
        <div className="rounded-lg border-2 border-dashed border-border p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
          <p className="mt-2 text-sm font-medium text-foreground">
            Upload new resume
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            PDF, DOC, DOCX up to 5MB
          </p>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Your resume is visible to recruiters when you apply to jobs
        </p>
      </CardContent>
    </Card>
  )
}
