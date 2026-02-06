'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function BeniFitLogo() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 200 200"
      aria-label="BeniFit logo"
    >
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="white"
        strokeWidth="6"
      />

      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="64"
        style={{
          fontFamily: `'Brush Script MT', 'Pacifico', cursive`,
          letterSpacing: '-2px',
        }}
      >
        <tspan fill="#ffffff">Beni</tspan>
        <tspan fill="#ffffff">Fit</tspan>
      </text>
    </svg>
  )
}


const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contacts', href: '#contacts' },
]

export default function Header() {
  const pathname = usePathname()
  const [isShrunk, setIsShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full bg-gradient-to-b from-[#1c1c1c] to-[#111111] border-b border-white/5 z-50 transition-all duration-300 ${isShrunk ? 'h-12' : 'h-16'}`}>
      <div className="mx-auto max-w-7xl px-6 h-full">
        <div className="flex h-full items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
            {/*             <h5 className="text-2xl font-bold text-white tracking-tight">
              Beni<span className="text-blue-600">Fit</span>
            </h5> */}
            <div className="flex justify-center md:justify-start">
              <BeniFitLogo />
            </div>
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

          <div className="flex md:hidden gap-2 items-center">
            <div className="flex md:hidden items-center gap-3 z-10">
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-blue-500 focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className="md:hidden shadow-md bg-gradient-to-b from-[#1c1c1c] to-[#111111]">
          <nav className="px-10 py-10 space-y-1">
            <div className="flex flex-col gap-8">
              {navItems.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold block text-white hover:text-blue-500">
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
