import { AppShell } from "@/components/layout/app-shell"
import { JobHeader } from "@/components/jobs/job-header"
import { JobDescription } from "@/components/jobs/job-description"
import { JobCompanyInfo } from "@/components/jobs/job-company-info"
import { JobApplicationCard } from "@/components/jobs/job-application-card"
import { JobSimilar } from "@/components/jobs/job-similar"

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  return (
    <AppShell userType="seeker" pageTitle="Job Details">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <JobHeader jobId={id} />
          <JobDescription />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <JobApplicationCard />
          <JobCompanyInfo />
          <JobSimilar />
        </div>
      </div>
    </AppShell>
  )
}
