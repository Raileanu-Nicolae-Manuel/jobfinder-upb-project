"use client"

import React from "react"

import { SidebarNav } from "./sidebar-nav"
import { TopNav } from "./top-nav"

interface AppShellProps {
  children: React.ReactNode
  userType?: "seeker" | "business"
  pageTitle?: string
}

export function AppShell({ 
  children, 
  userType = "seeker",
  pageTitle 
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav userType={userType} />
      <div className="pl-64">
        <TopNav title={pageTitle} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
