import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  const { email, password } = await request.json()
  
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        favorites: []
      }
    })

    return new Response(JSON.stringify(user), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error("Signup error:", error)
    return new Response(JSON.stringify({ error: "Registration failed" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}