import { AppShell } from "@/components/layout/app-shell"
import { MessagesLayout } from "@/components/messages/messages-layout"

export default function MessagesPage() {
  return (
    <AppShell userType="seeker" pageTitle="Messages">
      <MessagesLayout />
    </AppShell>
  )
}
