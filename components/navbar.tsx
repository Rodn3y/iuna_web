"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Important: Set initial state to false to ensure transparency at the top
    setScrolled(false)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Check scroll position immediately
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="container flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - larger */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="IUNA AI" width={200} height={60} className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-10 lg:flex">
          <div className="group relative">
            <button className="flex items-center text-lg font-medium text-white hover:text-primary">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* Invisible area to maintain hover state */}
            <div className="absolute left-0 top-full h-2 w-full"></div>
            <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-56 rounded-md bg-white p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <Link
                href="/products/weld-seam-scanner"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Weld Seam Scanner
              </Link>
              <Link
                href="/products/ai-scanner"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                AI Scanner
              </Link>
            </div>
          </div>

          <Link href="/use-cases" className="text-lg font-medium text-white hover:text-primary">
            Use Cases
          </Link>

          <Link href="/company" className="text-lg font-medium text-white hover:text-primary">
            Company
          </Link>

          <Link href="/careers" className="text-lg font-medium text-white hover:text-primary">
            Careers
          </Link>

          <Link href="/news" className="text-lg font-medium text-white hover:text-primary">
            News
          </Link>
        </nav>

        <div className="hidden items-center lg:flex">
          <Button className="text-base">Contact Sales</Button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container lg:hidden">
          <div className="divide-y divide-gray-700 rounded-b-lg bg-black px-4 py-2 shadow-lg">
            <div className="py-3">
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Products</div>
              <Link
                href="/products/weld-seam-scanner"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Weld Seam Scanner
              </Link>
              <Link
                href="/products/ai-scanner"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Scanner
              </Link>
            </div>

            <div className="py-3">
              <Link
                href="/use-cases"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link
                href="/news"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
            </div>

            <div className="py-3">
              <Link
                href="/company"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/careers"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            </div>

            <div className="flex flex-col space-y-3 py-4">
              <Button className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

