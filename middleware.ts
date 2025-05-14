import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log("🔍 Middleware running - Path:", path)

  // Define protected routes
  const isProtectedRoute =
    path.startsWith("/dashboard") ||
    path.startsWith("/transactions") ||
    path.startsWith("/budgets") ||
    path.startsWith("/settings")

  // Skip check for public pages
  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  // ✅ Check for demo flag (URL, header, or cookie)
  const url = request.nextUrl
  const demoQueryParam = url.searchParams.get("demo") === "true"
  const demoCookie = request.cookies.get("demoMode")?.value === "true"
  const demoHeader = request.headers.get("x-demo-mode") === "true"

  const isDemo = demoQueryParam || demoCookie || demoHeader

  // ✅ Also check for logged-in user cookie
  const userId = request.cookies.get("userId")?.value

  // ❌ If not in demo and no user ID, block access
  if (!userId && !isDemo) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/transactions/:path*", "/budgets/:path*", "/settings/:path*"],
}
