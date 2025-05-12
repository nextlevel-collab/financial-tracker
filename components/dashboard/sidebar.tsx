"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Receipt, PieChart, BarChart3, Settings, LogOut, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { toast } = useToast()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Logout failed")
      }

      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      })

      router.push("/login")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className={cn("pb-12 w-full", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <Link href="/dashboard" className="flex items-center">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="ml-2 text-lg font-semibold tracking-tight">FinTrack</h2>
          </Link>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link href="/dashboard">
              <Button
                variant={pathname === "/dashboard" ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === "/dashboard" && "bg-primary-light/30 text-primary-dark hover:bg-primary-light/40",
                )}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/transactions">
              <Button
                variant={pathname.startsWith("/transactions") ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname.startsWith("/transactions") &&
                    "bg-primary-light/30 text-primary-dark hover:bg-primary-light/40",
                )}
              >
                <Receipt className="mr-2 h-4 w-4" />
                Transactions
              </Button>
            </Link>
            <Link href="/budgets">
              <Button
                variant={pathname.startsWith("/budgets") ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname.startsWith("/budgets") && "bg-primary-light/30 text-primary-dark hover:bg-primary-light/40",
                )}
              >
                <PieChart className="mr-2 h-4 w-4" />
                Budgets
              </Button>
            </Link>
            <Link href="/reports">
              <Button
                variant={pathname.startsWith("/reports") ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname.startsWith("/reports") && "bg-primary-light/30 text-primary-dark hover:bg-primary-light/40",
                )}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Reports
              </Button>
            </Link>
            <Link href="/settings">
              <Button
                variant={pathname.startsWith("/settings") ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname.startsWith("/settings") && "bg-primary-light/30 text-primary-dark hover:bg-primary-light/40",
                )}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
