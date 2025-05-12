import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import heavy components
const TransactionFilters = dynamic(() => import("@/components/transactions/transaction-filters-client"), {
  loading: () => <div className="animate-pulse bg-muted rounded-md h-[100px] w-full"></div>,
})

const TransactionList = dynamic(() => import("@/components/transactions/transaction-list-client"), {
  loading: () => <div className="animate-pulse bg-muted rounded-md h-[400px] w-full"></div>,
})

export default function TransactionsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
        <Link href="/transactions/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </Link>
      </div>
      <TransactionFilters />
      <TransactionList />
    </div>
  )
}
