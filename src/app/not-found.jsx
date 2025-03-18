'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
  const pathname = usePathname()

  useEffect(() => {
    console.error(`404 - Path not found: ${pathname}`)
  }, [pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          Page not found: <code className="bg-gray-100 p-1 rounded">{pathname}</code>
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}