
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="VisTrust Consulting Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-xl font-bold text-[#004B87]">VisTrust</div>
              <div className="text-sm text-gray-600">Consulting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href || '/'}
                className={`text-sm font-medium transition-colors hover:text-[#004B87] ${
                  pathname === item?.href
                    ? 'text-[#004B87] border-b-2 border-[#F5A623] pb-1'
                    : 'text-gray-600'
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#F5A623] hover:bg-[#e89610] text-white">
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation?.map((item) => (
                <Link
                  key={item?.name}
                  href={item?.href || '/'}
                  className={`text-sm font-medium transition-colors hover:text-[#004B87] ${
                    pathname === item?.href
                      ? 'text-[#004B87] font-semibold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item?.name}
                </Link>
              ))}
              <Button asChild className="bg-[#F5A623] hover:bg-[#e89610] text-white mt-4 w-fit">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Schedule Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
