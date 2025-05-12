import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function FeatureHighlight() {
  const features = [
    "Track your income and expenses in one place",
    "Set and monitor budgets by category",
    "Visualize your spending patterns with charts",
    "Import transactions from CSV files",
    "Get insights into your financial habits",
    "Access your data from any device",
  ]

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader className="bg-primary-light/20">
        <CardTitle className="text-primary-dark">Why Choose FinTrack?</CardTitle>
        <CardDescription>Our financial tracker helps you take control of your money</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
