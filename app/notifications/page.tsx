import { AppShell } from "@/components/layout/app-shell"
import { NotificationsList } from "@/components/notifications/notifications-list"
import { NotificationsFilters } from "@/components/notifications/notifications-filters"

export default function NotificationsPage() {
  return (
    <AppShell userType="seeker" pageTitle="Notifications">
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <NotificationsFilters />
        </aside>

        {/* Notifications List */}
        <div className="lg:col-span-3">
          <NotificationsList />
        </div>
      </div>
    </AppShell>
  )
}
