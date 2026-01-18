import { AppShell } from "@/components/layout/app-shell"
import { CalendarView } from "@/components/calendar/calendar-view"
import { UpcomingEvents } from "@/components/calendar/upcoming-events"
import { CalendarFilters } from "@/components/calendar/calendar-filters"

export default function CalendarPage() {
  return (
    <AppShell userType="seeker" pageTitle="Calendar">
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <CalendarView />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <CalendarFilters />
          <UpcomingEvents />
        </div>
      </div>
    </AppShell>
  )
}
