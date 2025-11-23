'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

interface NavbarProperties {
  logoSrc: string
  logoAlt: string
}

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/services' },
  { name: 'Proyectos', href: '/talents' },
  { name: 'Preguntas Frecuentes', href: '/aboutus' },

]

export default function Navbar({ logoSrc, logoAlt }: NavbarProperties) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <nav className="w-full bg-black h-20 flex items-center fixed top-0 left-0 z-50 shadow">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={100}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* MENU ESCRITORIO */}
        <ul className="hidden md:flex space-x-10 text-gray-300 text-[15px] tracking-wide">
          {navItems.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-white transition-all"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* BOTÓN "Contáctanos" */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2 text-white font-medium rounded-lg
          bg-linear-to-r from-[#780B90] to-[#31053A]  hover:opacity-90 transition"
        >
          Contáctanos
        </Link>

        {/* BOTÓN MOBILE */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-start px-10 pt-24 space-y-8 text-2xl text-white z-40">
          {navItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 transition"
            >
              {name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  )
}

