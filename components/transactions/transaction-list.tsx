"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { useDemoMode } from "@/contexts/demo-context"
import { demoDataService } from "@/lib/demo-data"

// Mock data - in a real app, this would come from the database
const mockTransactions = [
  {
    id: "1",
    description: "Grocery Store",
    amount: -120.5,
    date: "2023-05-01",
    category: "Food",
  },
  {
    id: "2",
    description: "Monthly Salary",
    amount: 4200.0,
    date: "2023-05-01",
    category: "Income",
  },
  {
    id: "3",
    description: "Electric Bill",
    amount: -85.0,
    date: "2023-04-29",
    category: "Utilities",
  },
  {
    id: "4",
    description: "Rent Payment",
    amount: -1200.0,
    date: "2023-04-28",
    category: "Housing",
  },
  {
    id: "5",
    description: "Coffee Shop",
    amount: -4.5,
    date: "2023-04-28",
    category: "Food",
  },
  {
    id: "6",
    description: "Gas Station",
    amount: -45.0,
    date: "2023-04-27",
    category: "Transportation",
  },
  {
    id: "7",
    description: "Internet Bill",
    amount: -65.0,
    date: "2023-04-26",
    category: "Utilities",
  },
  {
    id: "8",
    description: "Restaurant",
    amount: -85.0,
    date: "2023-04-25",
    category: "Food",
  },
  {
    id: "9",
    description: "Movie Tickets",
    amount: -30.0,
    date: "2023-04-24",
    category: "Entertainment",
  },
  {
    id: "10",
    description: "Freelance Work",
    amount: 350.0,
    date: "2023-04-23",
    category: "Income",
  },
]

export function TransactionList() {
  const { isDemoMode } = useDemoMode()
  const [transactions, setTransactions] = useState(mockTransactions)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      if (isDemoMode) {
        const demoTransactions = demoDataService.getTransactions().map((t) => ({
          id: t.id,
          description: t.description,
          amount: t.isIncome ? t.amount : -t.amount,
          date: t.date,
          category: t.category,
        }))
        setTransactions(demoTransactions)
      }
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [isDemoMode])

  const handleDelete = (id: string) => {
    if (isDemoMode) {
      demoDataService.deleteTransaction(id)
      const updatedTransactions = demoDataService.getTransactions().map((t) => ({
        id: t.id,
        description: t.description,
        amount: t.isIncome ? t.amount : -t.amount,
        date: t.date,
        category: t.category,
      }))
      setTransactions(updatedTransactions)
    } else {
      setTransactions(transactions.filter((transaction) => transaction.id !== id))
    }
  }

  if (isLoading) {
    return (
      <div className="rounded-md border">
        <div className="p-8 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.description}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-primary-light/20 text-primary-dark border-primary-light">
                    {transaction.category}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell className={`text-right ${transaction.amount > 0 ? "text-primary-dark" : ""}`}>
                  {transaction.amount > 0 ? "+" : ""}
                  {formatCurrency(transaction.amount)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(transaction.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                No transactions found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default { TransactionList }
