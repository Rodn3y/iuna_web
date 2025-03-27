import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" alt="IUNA AI" width={140} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-gray-400">
              Leading provider of AI vision systems for automotive and manufacturing industries.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/iuna-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/iunaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a
                href="https://www.youtube.com/@iunaai2860"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/ai-scanner" className="text-gray-400 hover:text-white">
                  AI Scanner
                </Link>
              </li>
              <li>
                <Link href="/products/weld-seam-scanner" className="text-gray-400 hover:text-white">
                  Weld Seam Scanner
                </Link>
              </li>
              <li>
                <Link href="/products/quality-control" className="text-gray-400 hover:text-white">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link href="/products/predictive-maintenance" className="text-gray-400 hover:text-white">
                  Predictive Maintenance
                </Link>
              </li>
              <li>
                <Link href="/products/process-optimization" className="text-gray-400 hover:text-white">
                  Process Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/automotive" className="text-gray-400 hover:text-white">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/solutions/manufacturing" className="text-gray-400 hover:text-white">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/solutions/electronics" className="text-gray-400 hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/solutions/aerospace" className="text-gray-400 hover:text-white">
                  Aerospace
                </Link>
              </li>
              <li>
                <Link href="/solutions/medical-devices" className="text-gray-400 hover:text-white">
                  Medical Devices
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates on AI vision technology.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span>contact@iuna-ai.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span>+49 (0) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>Musterstraße 123, 12345 Berlin, Germany</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} IUNA AI. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

