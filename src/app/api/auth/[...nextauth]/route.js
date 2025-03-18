import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) return null
        const isValid = await bcrypt.compare(credentials.password, user.password)
        return isValid ? user : null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }