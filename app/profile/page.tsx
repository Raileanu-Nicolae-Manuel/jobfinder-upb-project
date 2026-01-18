import { AppShell } from "@/components/layout/app-shell"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileAbout } from "@/components/profile/profile-about"
import { ProfileExperience } from "@/components/profile/profile-experience"
import { ProfileEducation } from "@/components/profile/profile-education"
import { ProfileSkills } from "@/components/profile/profile-skills"
import { ProfileCV } from "@/components/profile/profile-cv"
import { ProfileCompletion } from "@/components/profile/profile-completion"

export default function ProfilePage() {
  return (
    <AppShell userType="seeker" pageTitle="My Profile">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <ProfileHeader />
          <ProfileAbout />
          <ProfileExperience />
          <ProfileEducation />
          <ProfileSkills />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <ProfileCompletion />
          <ProfileCV />
        </div>
      </div>
    </AppShell>
  )
}
