"use client"

import { useEffect } from "react"
import { useDemoMode } from "@/contexts/demo-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DemoPage() {
  const { enableDemoMode } = useDemoMode()

  useEffect(() => {
    // This will run on the client side
    const startDemo = () => {
      enableDemoMode()
    }

    // Small delay to ensure the component is fully mounted
    const timer = setTimeout(startDemo, 100)
    return () => clearTimeout(timer)
  }, [enableDemoMode])

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Demo Mode</CardTitle>
          <CardDescription>Loading the demo experience...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Please wait while we prepare your demo experience.</p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
