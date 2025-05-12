import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, PieChart, BarChart3, CreditCard, TrendingUp } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import any heavy components if needed
const FeatureHighlight = dynamic(() => import("./landing/feature-highlight"), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-muted rounded-md h-[300px] w-full"></div>,
})

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-primary-light/10">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">FinTrack</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Login
          </Link>
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4">
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Take control of your finances
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Track your spending, set budgets, and reach your financial goals with our easy-to-use financial
                    tracker.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/dashboard?demo=true">
                    <Button size="lg" variant="secondary" className="w-full">
                      Try Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <PieChart className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Track Spending</h3>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      Easily log and categorize your transactions
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <BarChart3 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Set Budgets</h3>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      Create and manage budgets by category
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Import Transactions</h3>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      Upload transactions from CSV files
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Visualize Data</h3>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      See your spending patterns with charts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 FinTrack. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
