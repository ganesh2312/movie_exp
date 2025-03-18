'use client' // Mandatory for client-side features

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()

  // Optional: Log missing paths
  useEffect(() => {
    console.error(`404 Error - Path not found: ${pathname}`)
  }, [pathname])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The requested URL <code className="bg-gray-100 px-2 py-1 rounded">{pathname}</code> was not found
        </p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  )
}