import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Only run middleware on protected routes
  const isProtectedRoute =
    path.startsWith("/dashboard") ||
    path.startsWith("/transactions") ||
    path.startsWith("/budgets") ||
    path.startsWith("/settings")

  // Skip middleware for public routes
  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  const userId = request.cookies.get("userId")?.value
  const demoMode =
  request.cookies.get("demoMode")?.value === "true" ||
  request.headers.get("x-demo-mode") === "true" ||
  request.nextUrl.searchParams.get("demo") === "true"


  // If trying to access protected route without being logged in and not in demo mode
  if (!userId && !demoMode) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Only run middleware on specific routes that need authentication
  matcher: ["/dashboard/:path*", "/transactions/:path*", "/budgets/:path*", "/settings/:path*"],
}
