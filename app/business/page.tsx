import { AppShell } from "@/components/layout/app-shell"
import { BusinessHeader } from "@/components/business/business-header"
import { BusinessStats } from "@/components/business/business-stats"
import { ActiveJobListings } from "@/components/business/active-job-listings"
import { RecentApplicants } from "@/components/business/recent-applicants"
import { CompanyFeed } from "@/components/business/company-feed"

export default function BusinessDashboardPage() {
  return (
    <AppShell userType="business" pageTitle="Dashboard">
      <div className="space-y-6">
        <BusinessHeader />
        <BusinessStats />
        
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <ActiveJobListings />
            <CompanyFeed />
          </div>

          {/* Sidebar */}
          <div>
            <RecentApplicants />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
