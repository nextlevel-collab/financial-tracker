import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function AccountBenefits() {
  const benefits = [
    "Save your financial data securely in the cloud",
    "Access your data from any device",
    "Set up recurring transactions",
    "Get personalized financial insights",
    "Export reports for tax purposes",
    "Set up notifications and reminders",
    "Connect to your bank accounts (coming soon)",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Why Create an Account?</CardTitle>
        <CardDescription>
          While the demo gives you a taste of our features, creating an account unlocks the full potential of our
          financial tracker.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
