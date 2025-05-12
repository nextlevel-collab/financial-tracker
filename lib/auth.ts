import { cookies } from "next/headers"
import { executeQuery } from "./db"
import bcrypt from "bcryptjs"

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

export async function createUser(email: string, password: string, name: string) {
  const hashedPassword = await hashPassword(password)

  try {
    const result = await executeQuery(
      "INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) RETURNING id",
      [email, hashedPassword, name],
    )
    return result[0]
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

export async function getUserByEmail(email: string) {
  try {
    const users = await executeQuery("SELECT * FROM users WHERE email = $1", [email])
    return users[0] || null
  } catch (error) {
    console.error("Error getting user by email:", error)
    throw error
  }
}

// Simple session management with cookies
// In a production app, use a proper auth solution like NextAuth.js
export function setUserSession(userId: number) {
  cookies().set("userId", userId.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })
}

export function getUserSession() {
  const userId = cookies().get("userId")?.value
  return userId ? Number.parseInt(userId) : null
}

export function clearUserSession() {
  cookies().delete("userId")
}
