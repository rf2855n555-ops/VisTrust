
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#004B87] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="VisTrust Consulting Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <div className="text-lg font-bold">VisTrust Consulting</div>
                <div className="text-sm opacity-80">Trusted Advisory</div>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Trust is the cornerstone of transformation. We bring clarity, strategy, 
              and results to organizations navigating change.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">vistrustconsulting@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} VisTrust Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
