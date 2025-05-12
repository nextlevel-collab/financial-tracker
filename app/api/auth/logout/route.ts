import { NextResponse } from "next/server"
import { clearUserSession } from "@/lib/auth"

export async function POST() {
  try {
    clearUserSession()
    return NextResponse.json({ message: "Logged out successfully" }, { status: 200 })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ message: "An error occurred during logout" }, { status: 500 })
  }
}
