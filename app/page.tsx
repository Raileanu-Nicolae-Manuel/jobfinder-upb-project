import { AppShell } from "@/components/layout/app-shell"
import { JobFeed } from "@/components/home/job-feed"
import { QuickStats } from "@/components/home/quick-stats"
import { RecommendedJobs } from "@/components/home/recommended-jobs"

export default function HomePage() {
  return (
    <AppShell userType="seeker" pageTitle="Home">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <QuickStats />
          <JobFeed />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <RecommendedJobs />
        </div>
      </div>
    </AppShell>
  )
}
