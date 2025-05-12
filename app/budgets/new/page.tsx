import { AddBudgetForm } from "@/components/budgets/add-budget-form"

export default function NewBudgetPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Add Budget</h1>
        <p className="text-muted-foreground">Create a new budget category to track your spending.</p>
      </div>
      <AddBudgetForm />
    </div>
  )
}
