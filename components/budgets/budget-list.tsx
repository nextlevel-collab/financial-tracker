"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { useDemoMode } from "@/contexts/demo-context"
import { demoDataService } from "@/lib/demo-data"

type Budget = {
  id: string
  category: string
  spent: number
  budget: number
  color: string
}

const defaultBudgets: Budget[] = [
  {
    id: "1",
    category: "Housing",
    spent: 1200,
    budget: 1500,
    color: "#4CAF50",
  },
  {
    id: "2",
    category: "Food",
    spent: 450,
    budget: 500,
    color: "#4CAF50",
  },
  {
    id: "3",
    category: "Transportation",
    spent: 280,
    budget: 300,
    color: "#4CAF50",
  },
  {
    id: "4",
    category: "Entertainment",
    spent: 180,
    budget: 150,
    color: "#EF4444",
  },
  {
    id: "5",
    category: "Utilities",
    spent: 120,
    budget: 200,
    color: "#4CAF50",
  },
]

export function BudgetList() {
  const { isDemoMode } = useDemoMode()
  const [budgets, setBudgets] = useState<Budget[]>(defaultBudgets)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      if (isDemoMode) {
        const demoBudgets = demoDataService.getBudgets().map((b) => ({
          id: b.id,
          category: b.category,
          spent: b.spent,
          budget: b.amount,
          color: getColorForBudget(b.spent, b.amount),
        }))
        setBudgets(demoBudgets)
      }
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [isDemoMode])

  const getColorForBudget = (spent: number, budget: number): string => {
    const percentage = (spent / budget) * 100
    if (percentage < 75) return "#4CAF50" // Green
    if (percentage < 90) return "#FF9800" // Orange
    return "#EF4444" // Red
  }

  const handleDelete = (id: string) => {
    if (isDemoMode) {
      demoDataService.deleteBudget(id)
      const updatedBudgets = demoDataService.getBudgets().map((b) => ({
        id: b.id,
        category: b.category,
        spent: b.spent,
        budget: b.amount,
        color: getColorForBudget(b.spent, b.amount),
      }))
      setBudgets(updatedBudgets)
    } else {
      setBudgets(budgets.filter((budget) => budget.id !== id))
    }
  }

  if (isLoading) {
    return (
      <div className="p-8 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {budgets.map((budget) => (
        <div key={budget.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium">{budget.category}</span>
              <div className="text-sm text-muted-foreground">
                ${budget.spent} of ${budget.budget}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(budget.id)}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
          <Progress
            value={(budget.spent / budget.budget) * 100}
            className="h-2"
            style={
              {
                "--progress-background": budget.color,
              } as React.CSSProperties
            }
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{Math.round((budget.spent / budget.budget) * 100)}% of budget used</span>
            <span>${budget.budget - budget.spent} remaining</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default { BudgetList }
