"use client"

import { useDemoMode } from "@/contexts/demo-context"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DemoBanner() {
  const { isDemoMode, disableDemoMode } = useDemoMode()

  if (!isDemoMode) return null

  return (
    <Alert className="bg-primary/10 border-primary mb-4">
      <AlertCircle className="h-4 w-4 text-primary" />
      <AlertTitle>Demo Mode</AlertTitle>
      <AlertDescription className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          You're using the demo version. Your data is stored locally and will be lost when you close your browser.
          Create an account to save your data and access all features.
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Link href="/register">
            <Button size="sm" className="whitespace-nowrap">
              Create Account
            </Button>
          </Link>
          <Button size="sm" variant="outline" onClick={disableDemoMode} className="whitespace-nowrap">
            Exit Demo
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
