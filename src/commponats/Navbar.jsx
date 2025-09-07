"use client"
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-xl font-bold text-gray-800">MyLogo</span>
                        </Link>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex space-x-4">
                        <Link
                            href="/signup"
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Signup
                        </Link>
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>)
}

export default Navbar
