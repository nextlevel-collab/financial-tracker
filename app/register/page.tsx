import { RegisterForm } from "@/components/auth/register-form"
import { AccountBenefits } from "@/components/account-benefits"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl grid gap-8 md:grid-cols-2">
        <div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-primary hover:underline">
                Sign in
              </a>
            </p>
          </div>
          <div className="mt-8">
            <RegisterForm />
          </div>
        </div>
        <div className="flex items-center">
          <AccountBenefits />
        </div>
      </div>
    </div>
  )
}
