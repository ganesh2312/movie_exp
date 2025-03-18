'use client'
import { useSession, signOut } from "next-auth/react"
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"
import Link from "next/link"
import DarkModeSwitch from "./DarkModeSwitch"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        {/* Left Section - Navigation Menu */}
        <div className="flex">
          <MenuItem title="HOME" address="/" Icon={AiFillHome} />
          <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
        </div>

        {/* Center Section - Logo */}
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              Movie
            </span>
            <span className="text-xl hidden sm:inline">explorer</span>
          </h2>
        </Link>

        {/* Right Section - Dark Mode & Auth */}
        <div className="flex items-center space-x-5">
          <DarkModeSwitch />
          {session ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Hello {session.user.email}</span>
              <button
                onClick={() => signOut()}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/login"
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}