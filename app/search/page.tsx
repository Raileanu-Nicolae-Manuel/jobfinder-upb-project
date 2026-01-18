import { AppShell } from "@/components/layout/app-shell"
import { JobSearchFilters } from "@/components/search/job-search-filters"
import { JobSearchResults } from "@/components/search/job-search-results"
import { JobSearchHeader } from "@/components/search/job-search-header"

export default function SearchPage() {
  return (
    <AppShell userType="seeker" pageTitle="Search Jobs">
      <div className="space-y-6">
        <JobSearchHeader />
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <JobSearchFilters />
          </aside>

          {/* Results */}
          <div className="lg:col-span-3">
            <JobSearchResults />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
