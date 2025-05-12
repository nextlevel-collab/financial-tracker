import { dynamicImport } from "@/lib/dynamic-import"

// Dynamically import heavy components
export const Overview = dynamicImport(() => import("./overview").then((mod) => ({ default: mod.Overview })))
export const BudgetSummary = dynamicImport(() =>
  import("./budget-summary").then((mod) => ({ default: mod.BudgetSummary })),
)
export const RecentTransactions = dynamicImport(() =>
  import("./recent-transactions").then((mod) => ({ default: mod.RecentTransactions })),
)
