"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type DemoContextType = {
  isDemoMode: boolean
  enableDemoMode: () => void
  disableDemoMode: () => void
}

const DemoContext = createContext<DemoContextType | undefined>(undefined)

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(false)
  const router = useRouter()

  // Check if demo mode is enabled on mount
  useEffect(() => {
    const demoMode = localStorage.getItem("demoMode") === "true"
    setIsDemoMode(demoMode)
  }, [])

  const enableDemoMode = () => {
    localStorage.setItem("demoMode", "true")
    setIsDemoMode(true)
    router.push("/dashboard")
  }

  const disableDemoMode = () => {
    localStorage.removeItem("demoMode")
    setIsDemoMode(false)
    router.push("/")
  }

  return <DemoContext.Provider value={{ isDemoMode, enableDemoMode, disableDemoMode }}>{children}</DemoContext.Provider>
}

export const useDemoMode = () => {
  const context = useContext(DemoContext)
  if (context === undefined) {
    throw new Error("useDemoMode must be used within a DemoProvider")
  }
  return context
}
