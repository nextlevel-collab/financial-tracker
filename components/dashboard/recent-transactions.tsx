"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"

const transactions = [
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
]

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.description}</TableCell>
            <TableCell>
              <Badge variant="outline">{transaction.category}</Badge>
            </TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell className={`text-right ${transaction.amount > 0 ? "text-green-600" : ""}`}>
              {transaction.amount > 0 ? "+" : ""}
              {formatCurrency(transaction.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
