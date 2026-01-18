"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { X, Plus, ChevronRight } from "lucide-react"

export function JobPostingForm() {
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="flex items-center gap-2 text-primary font-medium">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">1</span>
          Basic Info
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="flex items-center gap-2 text-muted-foreground">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">2</span>
          Details
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="flex items-center gap-2 text-muted-foreground">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">3</span>
          Preview
        </span>
      </div>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            Fill in the essential details about the job position
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input id="title" placeholder="e.g. Senior Frontend Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Employment Type *</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level *</Label>
              <Select>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                  <SelectItem value="lead">Lead / Manager</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input id="location" placeholder="e.g. San Francisco, CA" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workplace">Workplace Type</Label>
              <Select>
                <SelectTrigger id="workplace">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="salary-min">Salary Range (USD)</Label>
              <div className="flex items-center gap-2">
                <Input id="salary-min" type="number" placeholder="Min" />
                <span className="text-muted-foreground">-</span>
                <Input id="salary-max" type="number" placeholder="Max" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary-type">Salary Type</Label>
              <Select>
                <SelectTrigger id="salary-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yearly">Per Year</SelectItem>
                  <SelectItem value="monthly">Per Month</SelectItem>
                  <SelectItem value="hourly">Per Hour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Job Description */}
      <Card>
        <CardHeader>
          <CardTitle>Job Description</CardTitle>
          <CardDescription>
            Describe the role, responsibilities, and requirements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="description">Job Description *</Label>
            <Textarea
              id="description"
              placeholder="Describe the role and what the candidate will be doing..."
              className="min-h-32"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="responsibilities">Key Responsibilities</Label>
            <Textarea
              id="responsibilities"
              placeholder="List the main responsibilities (one per line)..."
              className="min-h-32"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea
              id="requirements"
              placeholder="List the required qualifications (one per line)..."
              className="min-h-32"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="benefits">Benefits</Label>
            <Textarea
              id="benefits"
              placeholder="List the benefits offered (one per line)..."
              className="min-h-24"
            />
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Required Skills</CardTitle>
          <CardDescription>
            Add the skills required for this position
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Add a skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addSkill()}
            />
            <Button type="button" onClick={addSkill} className="shrink-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="gap-1 pr-1">
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="ml-1 rounded-full hover:bg-muted-foreground/20"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
          <CardDescription>
            Configure additional options for your job posting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="application">
              <AccordionTrigger>Application Settings</AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="apply-url">External Application URL</Label>
                  <Input id="apply-url" placeholder="https://..." />
                  <p className="text-xs text-muted-foreground">
                    Leave empty to receive applications through JobFinder
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="resume-required" defaultChecked />
                  <Label htmlFor="resume-required" className="font-normal">
                    Require resume/CV
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cover-letter" />
                  <Label htmlFor="cover-letter" className="font-normal">
                    Require cover letter
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="screening">
              <AccordionTrigger>Screening Questions</AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-sm text-muted-foreground">
                  Add questions that candidates must answer when applying
                </p>
                <div className="space-y-2">
                  <Label htmlFor="question-1">Question 1</Label>
                  <Input id="question-1" placeholder="Enter a screening question..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="question-2">Question 2</Label>
                  <Input id="question-2" placeholder="Enter a screening question..." />
                </div>
                <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                  <Plus className="h-4 w-4" />
                  Add Question
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="visibility">
              <AccordionTrigger>Visibility Settings</AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="show-salary" defaultChecked />
                  <Label htmlFor="show-salary" className="font-normal">
                    Show salary range to candidates
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="featured" />
                  <Label htmlFor="featured" className="font-normal">
                    Feature this job (additional cost applies)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="urgent" />
                  <Label htmlFor="urgent" className="font-normal">
                    Mark as urgent hiring
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="notifications">
              <AccordionTrigger>Notification Preferences</AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="notify-email" defaultChecked />
                  <Label htmlFor="notify-email" className="font-normal">
                    Email me when someone applies
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notify-daily" />
                  <Label htmlFor="notify-daily" className="font-normal">
                    Send daily application summary
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notify-emails">Additional notification emails</Label>
                  <Input id="notify-emails" placeholder="email1@company.com, email2@company.com" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button variant="outline">Save as Draft</Button>
        <div className="flex gap-2">
          <Button variant="outline">Preview</Button>
          <Button>Publish Job</Button>
        </div>
      </div>
    </div>
  )
}
