'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contacts', href: '/contacts' },
]

export default function Header() {
  const pathname = usePathname()
  const [isShrunk, setIsShrunk] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-gradient-to-b from-[#1c1c1c] to-[#111111] border-b border-white/5 z-50 transition-all duration-300 ${isShrunk ? 'h-12' : 'h-16'}`}>
      <div className="mx-auto max-w-7xl px-6 h-full">
        <div className="flex h-full items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
            <h5 className="text-2xl font-bold text-white tracking-tight">
              Beni<span className="text-blue-600">Fit</span>
            </h5>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-colors ${isActive
                      ? 'text-blue-600 hover:text-blue-500'
                      : 'text-gray-300 hover:text-stone-400'
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
