import { AddTransactionForm } from "@/components/transactions/add-transaction-form"

export default function NewTransactionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Add Transaction</h1>
        <p className="text-muted-foreground">Create a new transaction record in your financial tracker.</p>
      </div>
      <AddTransactionForm />
    </div>
  )
}
