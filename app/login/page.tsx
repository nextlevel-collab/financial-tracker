import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign in to your account</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="/register" className="font-medium text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
