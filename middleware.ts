import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log("🔍 Middleware running - Path:", path)

  const isProtectedRoute =
    path.startsWith("/dashboard") ||
    path.startsWith("/transactions") ||
    path.startsWith("/budgets") ||
    path.startsWith("/settings")

  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  const userId = request.cookies.get("userId")?.value


  const demoMode = 
    request.nextUrl.searchParams.get("demo")?.toLowerCase() === "true" ||
    request.cookies.get("demoMode")?.value === "true" ||
    request.headers.get("x-demo-mode") === "true"
	

  if (!userId && !demoMode) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/transactions",
    "/transactions/:path*",
    "/budgets",
    "/budgets/:path*",
    "/settings",
    "/settings/:path*",
  ],
}
