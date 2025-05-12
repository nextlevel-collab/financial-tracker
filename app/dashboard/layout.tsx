import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { getUserSession } from "@/lib/auth"
import dynamic from "next/dynamic"

// Dynamically import the demo banner without ssr: false
const DemoBanner = dynamic(() => import("@/components/demo/demo-banner"), {
  loading: () => null,
})

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In a real app, get the user from the session
  const userId = getUserSession()

  // For demo purposes, we'll just use a placeholder user
  const user = {
    name: "Demo User",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4 md:p-6">
          {/* Client component will be rendered on the client */}
          <DemoBanner />
          {children}
        </main>
      </div>
    </div>
  )
}
