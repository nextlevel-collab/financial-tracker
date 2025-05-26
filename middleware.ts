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

  const demoQueryParam = request.nextUrl.searchParams.get("demo")
  const isDemoQuery = demoQueryParam?.toLowerCase() === "true"
  const demoCookie = request.cookies.get("demoMode")?.value === "true"
  const demoHeader = request.headers.get("x-demo-mode") === "true"

  const demoMode = isDemoQuery || demoCookie || demoHeader

  const userId = request.cookies.get("userId")?.value

  // If ?demo=true is used, set a cookie so demo mode persists
  if (isDemoQuery && !demoCookie) {
    const response = NextResponse.next()
    response.cookies.set("demoMode", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    return response
  }
	
  // If no userId and not in demo mode, redirect to login
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
