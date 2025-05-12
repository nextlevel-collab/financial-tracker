"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { useDemoMode } from "@/contexts/demo-context"
import { demoDataService } from "@/lib/demo-data"

const defaultBudgets = [
  {
    category: "Housing",
    spent: 1200,
    budget: 1500,
    color: "#4f46e5",
  },
  {
    category: "Food",
    spent: 450,
    budget: 500,
    color: "#16a34a",
  },
  {
    category: "Transportation",
    spent: 280,
    budget: 300,
    color: "#0891b2",
  },
  {
    category: "Entertainment",
    spent: 180,
    budget: 150,
    color: "#8b5cf6",
  },
  {
    category: "Utilities",
    spent: 120,
    budget: 200,
    color: "#ea580c",
  },
]

export function BudgetSummary() {
  const { isDemoMode } = useDemoMode()
  const [budgets, setBudgets] = useState(defaultBudgets)

  useEffect(() => {
    if (isDemoMode) {
      const demoBudgets = demoDataService.getBudgets().map((b) => ({
        category: b.category,
        spent: b.spent,
        budget: b.amount,
        color: getCategoryColor(b.category),
      }))
      setBudgets(demoBudgets)
    }
  }, [isDemoMode])

  // Helper function to get a color based on category
  function getCategoryColor(category: string): string {
    const colorMap: Record<string, string> = {
      Housing: "#4f46e5",
      Food: "#16a34a",
      Transportation: "#0891b2",
      Entertainment: "#8b5cf6",
      Utilities: "#ea580c",
      Healthcare: "#dc2626",
      Shopping: "#ec4899",
      "Personal Care": "#f59e0b",
      Education: "#0d9488",
      Savings: "#6366f1",
      Debt: "#ef4444",
    }

    return colorMap[category] || "#6b7280"
  }

  return (
    <div className="space-y-4">
      {budgets.map((item) => (
        <div key={item.category} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{item.category}</span>
            <span className="text-sm text-muted-foreground">
              ${item.spent} / ${item.budget}
            </span>
          </div>
          <Progress
            value={(item.spent / item.budget) * 100}
            className="h-2"
            style={
              {
                "--progress-background": item.color,
              } as React.CSSProperties
            }
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{Math.round((item.spent / item.budget) * 100)}% of budget used</span>
            <span>${item.budget - item.spent} remaining</span>
          </div>
        </div>
      ))}
    </div>
  )
}
