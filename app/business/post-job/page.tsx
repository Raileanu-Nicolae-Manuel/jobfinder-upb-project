import { AppShell } from "@/components/layout/app-shell"
import { JobPostingForm } from "@/components/business/job-posting-form"

export default function PostJobPage() {
  return (
    <AppShell userType="business" pageTitle="Post a Job">
      <JobPostingForm />
    </AppShell>
  )
}
